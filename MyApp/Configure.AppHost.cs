[assembly: HostingStartup(typeof(MyApp.AppHost))]

namespace MyApp;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            // Configure ASP.NET Core IOC Dependencies
        });

    public AppHost() : base("MyApp", typeof(MyServices).Assembly) {}

    public override void Configure(Funq.Container container)
    {
        AppConfig.Set(new AppConfig {
            BaseUrl = HostingEnvironment.IsDevelopment() ? "https://localhost:5002" : "https://diffusion.works",
            ApiBaseUrl = HostingEnvironment.IsDevelopment() ? "https://localhost:5001" : "https://api.blazordiffusion.com",
            CdnBaseUrl = HostingEnvironment.IsDevelopment() ? "https://localhost:5001" : "https://blazordiffusion.com",
            AssetsBasePath = "https://cdn.diffusion.works",
            FallbackAssetsBasePath = "https://pub-97bba6b94a944260b10a6e7d4bf98053.r2.dev",
        });
    }
}

public class Hello : IReturn<StringResponse> {}
public class MyServices : Service
{
    public object Any(Hello request) => new StringResponse { Result = $"Hello, World!" };
}
