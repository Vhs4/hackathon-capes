using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Capes.Infra.Context;

namespace Capes.Infra.Configurations
{
    public static class DbConfig
    {
        public static void AddDbConfig(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AppDbContext>(
                opts =>
                {
                    opts.UseSqlServer(configuration.GetConnectionString("SqlServeConnection"));
                });
        }
    }
}
