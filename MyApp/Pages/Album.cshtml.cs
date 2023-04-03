using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class AlbumModel : PageModel
{
    [FromRoute] public string? Slug { get; set; }
    [FromRoute] public new int? Page { get; set; }

    public string? RefId { get; set; }
    public int UsePage;
    public int Total;
    public int Pages;
    public const int GridColumns = 4;
    public AlbumResult? SelectedAlbum = null;
    public GalleryResults GalleryResults = new() { GridColumns = GridColumns };
    public List<AlbumRef> OtherAlbums = new();
    public Artifact? CoverImage = null;
    public string? Title;

    public IServiceGateway? Gateway = null;
    SearchArtifacts request = new();
    List<Artifact> results = new();
    HashSet<int> resultIds = new();

    private UserState userState;
    public AlbumModel(UserState userState)
    {
        this.userState = userState;
    }

    public async Task OnGetAsync()
    {
        UsePage = Math.Max(Page ?? 1, 1);
        Gateway ??= HostContext.AppHost.GetServiceGateway();

        ApiResult<QueryResponse<ArtifactResult>> api = new();
        GalleryResults = new GalleryResults { GridColumns = GridColumns };

        var albumRef = userState.GetAlbumRefBySlug(Slug!);
        RefId = albumRef?.RefId;

        if (RefId != null)
        {
            request.Album = RefId;
            request.Skip = (UsePage - 1) * UserState.StaticPagedTake;
            request.Take = UserState.StaticPagedTake;
            request.Include = "Total";
            api = await Gateway.ApiAsync(request);
            clearResults();

            if (api.Succeeded)
            {
                if (api.Response?.Results != null)
                {
                    addResults(api.Response.Results);
                }
            }

            var apiAlbum = await Gateway.ApiAsync(new GetAlbumResults { RefIds = new() { RefId } });
            if (apiAlbum.Succeeded)
            {
                SelectedAlbum = apiAlbum.Response?.Results.FirstOrDefault();
                if (SelectedAlbum != null)
                {
                    Title = SelectedAlbum.Name + (UsePage > 1 ? $" Page {UsePage}" : "");
                }
            }

            var apiAlbums = await Gateway.ApiAsync(new GetAlbumRefs());
            if (apiAlbums.Succeeded)
            {
                OtherAlbums = apiAlbums.Response!.Results;
            }
        }

        Total = api.Response?.Total ?? 0;
        Pages = (int)Math.Ceiling(Total / (double)UserState.StaticPagedTake);
        CoverImage = SelectedAlbum != null ? results.FirstOrDefault(x => x.Id == SelectedAlbum.PrimaryArtifactId) : null;
    }

    public string GetAlbumRoute(AlbumResult album, int? pageNo = 1) => GetAlbumRoute(album.Slug, pageNo); 
    public string GetAlbumRoute(string slug, int? pageNo = 1)
    {
        var suffix = pageNo == 1 ? "" : "_" + pageNo;
        return $"/albums/{slug}{suffix}";
    }

    void setResults(IEnumerable<Artifact> newResults)
    {
        results = newResults.ToList();
        GalleryResults = X.Apply(GalleryResults.Clone(), x => x.Artifacts = results.ShuffleGridArtifacts(GridColumns).ToList());
    }

    void clearResults()
    {
        results.Clear();
        resultIds.Clear();
    }

    void addResults(List<ArtifactResult> artifacts, bool reset = false)
    {
        if (reset)
            clearResults();

        //var hasMore = artifacts.Count >= request.Take;
        foreach (var artifact in artifacts)
        {
            if (resultIds.Contains(artifact.Id))
                continue;

            resultIds.Add(artifact.Id);
            results.Add(artifact);
        }
        setResults(results);
    }
}
