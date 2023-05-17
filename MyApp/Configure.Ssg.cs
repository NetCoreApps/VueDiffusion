using System.Diagnostics;
using System.Globalization;
using System.Text;
using ServiceStack.Host;
using ServiceStack.IO;
using ServiceStack.Logging;
using ServiceStack.Text;

[assembly: HostingStartup(typeof(MyApp.ConfigureSsg))]

namespace MyApp;

public class ConfigureSsg : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context,services) =>
        {
            services.AddSingleton<RazorPagesEngine>();
            services.AddSingleton<MarkdownPages>();
            services.AddSingleton<MarkdownBlog>();

            services.AddSingleton<IServiceGateway>(implementationFactory: 
                provider => new JsonApiClient(AppConfig.Instance.ApiBaseUrl!));
            services.AddSingleton<UserState>();
        })
        .ConfigureAppHost(
            appHost => appHost.Plugins.Add(new CleanUrlsFeature()),
            afterPluginsLoaded: appHost =>
            {
                var pages = appHost.Resolve<MarkdownPages>();
                var blogPosts = appHost.Resolve<MarkdownBlog>();
                
                var markdownFeatures = new IMarkdownPages[] { pages, blogPosts }; 
                markdownFeatures.Each(x => x.VirtualFiles = appHost.VirtualFiles);

                blogPosts.Authors = Authors;

                pages.LoadFrom("_pages");
                blogPosts.LoadFrom("_posts");
                
                var userState = appHost.Resolve<UserState>();
                userState.LoadAsync().GetAwaiter().GetResult();
            },
            afterAppHostInit: appHost =>
            {
                // prerender with: `$ npm run prerender` 
                AppTasks.Register("prerender", args =>
                {
                    var distDir = appHost.ContentRootDirectory.RealPath.CombineWith("dist");
                    if (Directory.Exists(distDir))
                        FileSystemVirtualFiles.DeleteDirectory(distDir);
                    FileSystemVirtualFiles.CopyAll(
                        new DirectoryInfo(appHost.ContentRootDirectory.RealPath.CombineWith("wwwroot")),
                        new DirectoryInfo(distDir));

                    var razorFiles = appHost.VirtualFiles.GetAllMatchingFiles("*.cshtml");
                    RazorSsg.PrerenderAsync(appHost, razorFiles, distDir).GetAwaiter().GetResult();

                    var appConfig = AppConfig.Instance;
                    PrerenderSitemapAsync(appHost, distDir, new JsonApiClient(appConfig.ApiBaseUrl!), appConfig.BaseUrl!).GetAwaiter().GetResult();
                });
            });

    public List<AuthorInfo> Authors { get; } = new() 
    {
        new AuthorInfo("Lucy Bates", "img/authors/author1.svg")
        {
            TwitterUrl = "https://twitter.com/lucy",
            GitHubUrl = "https://github.com/lucy",
        },
        new AuthorInfo("Gayle Smith", "img/authors/author2.svg")
        {
            TwitterUrl = "https://twitter.com/gayle",
        },
        new AuthorInfo("Brandon Foley", "img/authors/author3.svg")
        {
            GitHubUrl = "https://github.com/brandon",
        },
    };

    async Task PrerenderSitemapAsync(ServiceStackHost appHost, string distDir, JsonApiClient client, string baseUrl)
    {
        var log = appHost.Resolve<ILogger<SitemapFeature>>();
        log.LogInformation("Prerendering Sitemap...");
        var sw = Stopwatch.StartNew();

        var feature = await CreateSitemapAsync(log, client, baseUrl);
        var createElapsed = sw.Elapsed;
        log.LogInformation("Sitemap took {Elapsed} to create", createElapsed.Humanize());
        
        var contents = feature.GetSitemapIndex();
        await File.WriteAllTextAsync(distDir.CombineWith("/sitemap.xml"), contents);

        foreach (var sitemap in feature.SitemapIndex)
        {
            contents = feature.GetSitemapUrlSet(sitemap.UrlSet);
            var sitemapPath = distDir.CombineWith(sitemap.AtPath);
            Path.GetDirectoryName(sitemapPath).AssertDir();
            await File.WriteAllTextAsync(sitemapPath, contents);
        }

        log.LogInformation("Sitemap took {Elapsed} to prerender", (sw.Elapsed - createElapsed).Humanize());
    }
    
    async Task<SitemapFeature> CreateSitemapAsync(ILogger log, JsonApiClient client, string baseUrl)
    {
        var albums = (await client.ApiAsync(new QueryAlbums())).Response!.Results;

        DateTime ValidDate(DateTime date) =>
            date.Year < 2000 ? new DateTime(DateTime.UtcNow.Year, date.Month, date.Day) : date;

        var to = new SitemapFeature {
            SitemapIndex =
            {
                new Sitemap
                {
                    Location = baseUrl.CombineWith("/sitemaps/sitemap-albums.xml"),
                    AtPath = "/sitemaps/sitemap-albums.xml",
                    LastModified = albums.Max(x => x.ModifiedDate),
                    UrlSet = albums.Map(album => new SitemapUrl {
                        Location = baseUrl.CombineWith($"/albums/{album.Slug}"),
                        LastModified = ValidDate(album.Artifacts.Max(x => x.ModifiedDate)),
                        ChangeFrequency = SitemapFrequency.Daily,
                    })
                },
            }
        };
        log.LogInformation("Albums Loaded: {Count}", albums.Count);

        var api = await client.ApiAsync(new QueryArtifacts { Include = "total", Take = 1 });
        var totalArtifacts = api.Response!.Total;
        
        var now = DateTime.UtcNow.Date;
        int latestPages = (int)Math.Ceiling(totalArtifacts / (double)UserState.StaticTake);
        to.SitemapIndex.Add(new Sitemap
        {
            Location = baseUrl.CombineWith("/sitemaps/sitemap-latest.xml"),
            AtPath = "/sitemaps/sitemap-latest.xml",
            LastModified = albums.Max(x => x.ModifiedDate),
            UrlSet = latestPages.Times(i => new SitemapUrl {
                Location = baseUrl.CombineWith("latest" + (i == 0 ? "" : "_" + (i + 1))),
                LastModified = now,
                ChangeFrequency = SitemapFrequency.Daily,
            })
        });
        
        foreach (var album in albums)
        {
            var total = album.Artifacts.Count;
            var pages = (int)Math.Ceiling(total / (double)UserState.StaticPagedTake);
            var albumArtifacts = album.Artifacts;
            for (var i = 0; i < pages; i++)
            {
                var pageNo = i + 1;
                var suffix = pages == 1 ? "" : "_" + pageNo;
                var path = $"/sitemaps/albums/sitemap-{album.Slug}{suffix}.xml";
                var pageArtifacts = albumArtifacts.Skip(i * UserState.StaticPagedTake).Take(UserState.StaticPagedTake).ToList();
                to.SitemapIndex.Add(new Sitemap
                {
                    Location = baseUrl.CombineWith(path),
                    AtPath = path,
                    LastModified = pageArtifacts.Max(x => x.ModifiedDate),
                    UrlSet = pageArtifacts.Map(x => new SitemapUrl {
                        Location = baseUrl.AddQueryParam("view", x.ArtifactId),
                        LastModified = ValidDate(x.ModifiedDate),
                        ChangeFrequency = SitemapFrequency.Monthly,
                    })
                });
            }
        }
        
        return to;
    }
    
}

// Add additional frontmatter info to include
public class MarkdownFileInfo : MarkdownFileBase
{
}
