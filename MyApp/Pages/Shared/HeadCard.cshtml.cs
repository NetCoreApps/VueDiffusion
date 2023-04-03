using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyApp.Pages.Shared;

public class HeadCard : PageModel
{
    public string Url { get; set; }
    public string? Description { get; set; }
    public string? ImagePath { get; set; }

    public string? ImageUrl => ImagePath == null
        ? ""
        : ImagePath.IndexOf("://") >= 0
            ? ImagePath
            : AppConfig.Instance.AssetsBasePath.CombineWith(ImagePath);
}