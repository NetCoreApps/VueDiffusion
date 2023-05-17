using System.Text.RegularExpressions;

namespace MyApp;

public class UserState
{
    public const int InitialTake = 50;
    public const int NextPage = 100;
    public const int StaticTake = 500;
    public const int StaticPagedTake = 250;
    public IServiceGateway Client { get; }

    public UserState(IServiceGateway client)
    {
        Client = client;
    }

    public bool IsLoading { get; set; }
    public Dictionary<int, AlbumResult> AlbumsMap { get; } = new();
    public Dictionary<int, Artifact> ArtifactsMap { get; } = new();
    public Dictionary<int, Creative> CreativesMap { get; } = new();
    public Dictionary<int, AlbumResult[]> CreativesInAlbumsMap { get; } = new();
    public List<AlbumRef> AlbumRefs { get; } = new();
    public int? TotalArtifacts { get; set; }

    public async Task LoadAsync()
    {
        if (AlbumRefs.Count == 0)
        {
            var api = await ApiAsync(new GetAlbumRefs());
            if (api.Succeeded)
            {
                AlbumRefs.AddRange(api.Response!.Results);
            }
        }
        if (TotalArtifacts == null)
        {
            var api = await ApiAsync(new QueryArtifacts { Take = 0, Include = "Total" });
            if (api.Succeeded)
            {
                TotalArtifacts = api.Response!.Total;
            }
        }
    }

    public AlbumRef? GetAlbumRefBySlug(string slug) => AlbumRefs.FirstOrDefault(x => x.Slug == slug); 

    public AlbumResult? GetCachedAlbum(int? id) => id != null
        ? AlbumsMap.TryGetValue(id.Value, out var a) ? a : null
        : null;
    public Artifact? GetCachedArtifact(int? id) => id != null
        ? ArtifactsMap.TryGetValue(id.Value, out var a) ? a : null
        : null;

    public Creative? GetCachedCreative(int? id) => id != null
        ? CreativesMap.TryGetValue(id.Value, out var a) ? a : null
        : null;

    public async Task<Creative?> GetCreativeAsync(int? creativeId)
    {
        if (creativeId == null)
            return null;
        var creative = GetCachedCreative(creativeId);
        if (creative != null)
            return creative;

        var request = new QueryCreatives { Id = creativeId };
        var api = await ApiAsync(request);
        if (api.Succeeded && api.Response?.Results != null)
        {
            LoadCreatives(api.Response.Results);
        }
        if (!api.Succeeded)
        {
            await OnApiErrorAsync(request, api);
        }
        return GetCachedCreative(creativeId);
    }

    protected virtual async Task OnApiErrorAsync(object requestDto, IHasErrorStatus apiError)
    {
    }

    public void LoadCreatives(IEnumerable<Creative> creatives) => creatives.ToList().ForEach(LoadCreative);
    public void LoadCreative(Creative creative)
    {
        CreativesMap[creative.Id] = creative;
        foreach (var artifact in creative.Artifacts.OrEmpty())
        {
            ArtifactsMap[artifact.Id] = artifact;
        }
    }

    public void LoadAlbums(IEnumerable<AlbumResult> albums) => albums.ToList().ForEach(LoadAlbum);
    public void LoadAlbum(AlbumResult album) => AlbumsMap[album.Id] = album;
    public void LoadArtifacts(IEnumerable<Artifact> artifacts) => artifacts.ToList().ForEach(LoadArtifact);
    public void LoadArtifact(Artifact artifact) => ArtifactsMap[artifact.Id] = artifact;

    private void NotifyStateChanged(){}

    async Task<ApiResult<TResponse>> ApiAsync<TResponse>(IReturn<TResponse> request)
    {
        IsLoading = true;
        NotifyStateChanged();

        var api = await Client.ApiAsync(request);

        IsLoading = false;
        NotifyStateChanged();

        return api;
    }
    
    public async Task LoadArtifactsAsync(IEnumerable<int> artifactIds)
    {
        var missingIds = new List<int>();
        foreach (var id in artifactIds)
        {
            if (GetCachedArtifact(id) == null)
                missingIds.Add(id);
        }
        if (missingIds.Count > 0)
        {
            IsLoading = true;
            var api = await ApiAsync(new QueryArtifacts { Ids = missingIds });
            if (api.Response?.Results != null) LoadArtifacts(api.Response.Results);
        }
    }

    public async Task<List<AlbumResult>> GetAlbumsByIdsAsync(IEnumerable<int> albumIds)
    {
        var missingIds = new List<int>();
        foreach (var id in albumIds)
        {
            if (GetCachedAlbum(id) == null)
                missingIds.Add(id);
        }
        if (missingIds.Count > 0)
        {
            var api = await ApiAsync(new GetAlbumResults { Ids = missingIds });
            if (api.Response?.Results != null) LoadAlbums(api.Response.Results);
        }

        var to = albumIds.Select(id => GetCachedAlbum(id))
            .Where(x => x != null)
            .Cast<AlbumResult>().ToList();
        
        var albumCoverArtifactIds = to.Select(x => x.GetAlbumCoverArtifactId());
        await LoadArtifactsAsync(albumCoverArtifactIds);
        
        return to;
    }

    public Artifact? GetAlbumCoverArtifact(AlbumResult album)
    {
        var id = album.GetAlbumCoverArtifactId();
        return GetCachedArtifact(id);
    }
    
    public async Task<Artifact?> GetArtifactAsync(int? artifactId)
    {
        if (artifactId == null)
            return null;
        var artifact = GetCachedArtifact(artifactId);
        if (artifact != null)
            return artifact;

        var request = new QueryArtifacts { Id = artifactId };
        var api = await ApiAsync(request);
        if (api is { Succeeded: true, Response.Results: { } })
        {
            LoadArtifacts(api.Response.Results);
        }
        return GetCachedArtifact(artifactId);
    }

    public async Task<AlbumResult[]> GetCreativeInAlbumsAsync(int? creativeId)
    {
        if (creativeId == null)
            return Array.Empty<AlbumResult>();

        var id = creativeId.Value;
        if (CreativesInAlbumsMap.TryGetValue(id, out var albums))
            return albums;

        var api = await ApiAsync(new GetCreativesInAlbums { CreativeId = id });
        if (api.Succeeded)
        {
            return CreativesInAlbumsMap[id] = (api.Response!.Results ?? new()).ToArray();
        }
        return Array.Empty<AlbumResult>();
    }
    
}

public class GalleryResults
{
    public List<Artifact> Artifacts { get; set; } = new();
    public Artifact? Selected { get; set; }
    public Artifact? Viewing { get; set; }
    public Creative? Creative { get; set; }
    public AlbumResult[] CreativeAlbums { get; set; } = Array.Empty<AlbumResult>();
    public int? GridColumns { get; set; }

    public GalleryResults(List<Artifact>? artifacts = null)
    {
        Artifacts = artifacts ?? new();
    }

    public async Task<GalleryResults> LoadAsync(UserState userState, int? selectedId, int? viewingId)
    {
        if (selectedId != Selected?.Id || viewingId != Viewing?.Id)
        {
            Selected = await userState.GetArtifactAsync(selectedId);
            Viewing = await userState.GetArtifactAsync(viewingId);
            Creative = await userState.GetCreativeAsync(Selected?.CreativeId);
            CreativeAlbums = await userState.GetCreativeInAlbumsAsync(Selected?.CreativeId);
            if (CreativeAlbums.Length > 0)
                await userState.LoadArtifactsAsync(CreativeAlbums.Where(x => x.PrimaryArtifactId != null).Select(x => x.PrimaryArtifactId!.Value));
        }

        return this;
    }

    public GalleryResults Clone() => new() {
        Artifacts = Artifacts,
        Selected = Selected,
        Viewing = Viewing,
        Creative = Creative,
        CreativeAlbums = CreativeAlbums,
        GridColumns = GridColumns,
    };
}


public static class AppCss
{
    // tailwind needs to see full classes
    static Dictionary<string, string> GridClasses = new()
    {
        ["1"] = "grid-cols-1",
        ["2"] = "grid-cols-2",
        ["3"] = "grid-cols-3",
        ["4"] = "grid-cols-4",
        ["5"] = "grid-cols-5",
        ["6"] = "grid-cols-6",
        ["7"] = "grid-cols-7",
        ["8"] = "grid-cols-8",
        ["9"] = "grid-cols-9",
        ["10"] = "grid-cols-10",
        ["11"] = "grid-cols-11",
        ["12"] = "grid-cols-12",
    };

    public static string GetGridClass(int columns)
    {
        return "grid-cols-3 sm:grid-cols-4 xl:grid-cols-5";
        //return GetGridClass(columns.ToString());
    }

    public static string GetGridClass(string columns)
    {
        return GridClasses.TryGetValue(columns, out var cls) 
            ? cls 
            : "grid-cols-6";
    }
}

public class ArtifactImageParams
{
    public Artifact? Artifact { get; set; }
    public string? Class { get; set; }
    public string? ImageClass { get; set; }
    public int? MinSize { get; set; }
}

public static class CreativeExtensions
{
    public static string GetBackgroundStyle(this Artifact artifact) => artifact.Background != null ? "background-color:" + artifact.Background : "";
    public static string GetPublicUrl(this Artifact artifact) => AppConfig.Instance.AssetsBasePath + artifact.FilePath;
    public static int GetAlbumCoverArtifactId(this AlbumResult album)
    {
        return album.PrimaryArtifactId != null && album.ArtifactIds.Contains(album.PrimaryArtifactId.Value)
            ? album.PrimaryArtifactId.Value
            : album.ArtifactIds.First();
    }
    

    private static readonly Regex InvalidCharsRegex = new(@"[^a-z0-9\s-]", RegexOptions.Compiled);
    private static readonly Regex SpacesRegex = new(@"\s", RegexOptions.Compiled);
    private static readonly Regex CollapseHyphensRegex = new("-+", RegexOptions.Compiled);
    private static readonly Regex RemoveNonAsciiRegex = new(@"[^\u0000-\u007F]+", RegexOptions.Compiled);
    public static string GenerateSlug(string phrase, int maxLength = 100)
    {
        if (string.IsNullOrEmpty(phrase))
            return string.Empty;

        var str = phrase.ToLower()
            .Replace("#", "sharp")  // c#, f# => csharp, fsharp
            .Replace("++", "pp");   // c++ => cpp

        str = RemoveNonAsciiRegex.Replace(str, "");
        str = InvalidCharsRegex.Replace(str, "-");
        str = str.Substring(0, Math.Min(str.Length, maxLength)).Trim();
        str = SpacesRegex.Replace(str, "-");
        str = CollapseHyphensRegex.Replace(str, "-");

        if (string.IsNullOrEmpty(str))
            return str;

        if (str[0] == '-')
            str = str.Substring(1);
        if (str.Length > 0 && str[str.Length - 1] == '-')
            str = str.Substring(0, str.Length - 1);

        return str;
    }

    public static string GetArtifactFileName(int artifactId, string slug) =>
        $"{artifactId.ToString().PadLeft(4, '0')}_{slug}";
    
    public static string GetArtifactArtView(this Artifact artifact, string slug) =>
        $"/artifacts/{Math.Floor(artifact.Id / 1000d)}/{GetArtifactFileName(artifact.Id, slug)}.html";
    public static string GetArtifactArtView(this AlbumArtifact artifact, string slug) =>
        $"/artifacts/{Math.Floor(artifact.Id / 1000d)}/{GetArtifactFileName(artifact.ArtifactId, slug)}.html";
    public static string GetSlug(this Creative creative) => GenerateSlug(creative.UserPrompt);
    public static string GetSlug(this Artifact artifact) => GenerateSlug(GetArtifactPrompt(artifact));
    public static string GetArtifactPrompt(Artifact artifact) =>
        (artifact is ArtifactResult result ? result.UserPrompt : null)
        ?? artifact.Prompt ?? "";
    
    public static int GetRowSpan(this Artifact artifact) => artifact.Height > artifact.Width ? 2 : 1;
    public static int GetColSpan(this Artifact artifact) => artifact.Width > artifact.Height ? 2 : 1;

    // Reorder Artifacts to minimize gaps
    public static IEnumerable<Artifact> ShuffleGridArtifacts(this IEnumerable<Artifact> artifacts, int columns)
    {
        var deferPortraits = new Queue<Artifact>();
        var deferLandscapes = new Queue<Artifact>();

        var topColSpan = 0;
        var endColSpan = 0;
        var portraits = 0;

        foreach (var next in artifacts)
        {
            var colSpan = next.GetColSpan();
            var rowSpan = next.GetRowSpan();
            var isPortrait = rowSpan > 1;

            while (deferPortraits.Count > 0 && topColSpan < columns)
            {
                if (deferPortraits.TryDequeue(out var portrait))
                {
                    topColSpan += 1;
                    portraits++;
                    yield return portrait;
                }
                else break;
            }
            if (isPortrait && topColSpan < columns)
            {
                topColSpan += 1;
                portraits++;
                yield return next;
                continue;
            }

            while (deferLandscapes.Count > 0 && topColSpan < columns - 2)
            {
                if (deferLandscapes.TryDequeue(out var landscape))
                {
                    topColSpan += 2;
                    yield return landscape;
                }
            }

            if (topColSpan < columns)
            {
                if (topColSpan + colSpan > columns)
                {
                    deferLandscapes.Enqueue(next);
                }
                else
                {
                    // only show portraits from start to avoid:
                    // | S P . . . |
                    // | - L . . . |
                    if (topColSpan > 0 && isPortrait)
                    {
                        deferPortraits.Enqueue(next);
                    }
                    else
                    {
                        topColSpan += colSpan;
                        if (isPortrait)
                            portraits++;

                        yield return next;
                    }
                }
            }
            else
            {
                // include spans of portraits on top row when calculating bottom row spans
                if (portraits > 0)
                {
                    endColSpan += portraits;
                    portraits = 0;
                }

                if (endColSpan < columns - 2)
                {
                    while (deferLandscapes.Count > 0 && endColSpan < columns - 2)
                    {
                        if (deferLandscapes.TryDequeue(out var landscape))
                        {
                            endColSpan += 2;
                            yield return landscape;
                        }
                    }
                }

                if (isPortrait)
                {
                    deferPortraits.Enqueue(next); // no portraits on bottom row
                }
                else
                {
                    if (endColSpan + colSpan > columns)
                    {
                        deferLandscapes.Enqueue(next);
                    }
                    else
                    {
                        endColSpan += colSpan;
                        if (endColSpan == columns)
                        {
                            topColSpan = endColSpan = portraits = 0;
                        }
                        yield return next;
                    }
                }
            }
        }

        // fill in missing cols with landscapes
        var missing = (columns * 2) - topColSpan - endColSpan;
        while (missing > 1 && deferLandscapes.Count > 0)
        {
            if (deferLandscapes.TryDequeue(out var artifact))
            {
                var colSpan = GetColSpan(artifact);
                missing -= colSpan;
                yield return artifact;
            }
        }

        var remaining = new List<Artifact>();
        while (deferPortraits.Count > 0 || deferLandscapes.Count > 0)
        {
            // split deferred artifacts in lots of 2 rows
            var cols = columns * 2;
            while (cols > 0 && deferPortraits.TryDequeue(out var next))
            {
                remaining.Add(next);
                cols -= next.GetColSpan();
            }

            cols = columns * 2;
            while (cols > 0 && deferLandscapes.TryDequeue(out var next))
            {
                remaining.Add(next);
                cols -= next.GetColSpan();
            }
        }

        if (remaining.Count > 0)
        {
            foreach (var artifact in ShuffleGridArtifacts(remaining, columns))
            {
                yield return artifact;
            }
        }
    }
}
