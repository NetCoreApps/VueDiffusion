namespace MyApp;

public class AppConfig
{
    public static AppConfig Instance { get; private set; } = new();
    public static void Set(AppConfig config)
    {
        Instance = config;
    }
    public string? CdnBaseUrl { get; init; }
    public string? ApiBaseUrl { get; init; }
    public string? AssetsBasePath { get; init; }
    public string? FallbackAssetsBasePath { get; init; }
}