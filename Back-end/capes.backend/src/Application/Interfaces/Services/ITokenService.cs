using Capes.Domain.Models;

namespace Capes.Application.Interfaces.Services
{
    public interface ITokenService
    {
        string GenerateToken(User user);
    }
}
