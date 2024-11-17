using Microsoft.Extensions.DependencyInjection;
using Capes.Infra.Repository;
using Capes.Application.Interfaces.Services;
using Capes.Application.Services;
using Capes.Application.Interfaces.Repository;

namespace Capes.Infra.Configurations
{
    public static class InfraConfig
    {
        public static void AddInfra(this IServiceCollection services)
        {
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IArticleService, ArticleService>();
            services.AddScoped(typeof(IBaseService<>), typeof(BaseService<>));

            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped(typeof(IBaseRepositoryEF<>), typeof(BaseRepositoryEF<>));
            
        }
    }
}