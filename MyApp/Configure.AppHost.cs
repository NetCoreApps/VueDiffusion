[assembly: HostingStartup(typeof(MyApp.AppHost))]

namespace MyApp;

public class AppHost() : AppHostBase("MyApp"), IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context,services) => {
            // Configure ASP.NET Core IOC Dependencies
            var env = context.HostingEnvironment;
            AppConfig.Set(new AppConfig {
                BaseUrl = env.IsDevelopment() ? "https://localhost:5002" : "https://diffusion.works",
                ApiBaseUrl = env.IsDevelopment() ? "https://localhost:5001" : "https://blazordiffusion.com",
                CdnBaseUrl = env.IsDevelopment() ? "https://localhost:5001" : "https://blazordiffusion.com",
                AssetsBasePath = "https://cdn.diffusion.works",
                FallbackAssetsBasePath = "https://pub-97bba6b94a944260b10a6e7d4bf98053.r2.dev",
            });
            services.AddSingleton(AppConfig.Instance);
        });

    public override void Configure()
    {
    }
}

public class Hello : IReturn<StringResponse> {}
public class MyServices : Service
{
    public object Any(Hello request) => new StringResponse { Result = $"Hello, World!" };
}
