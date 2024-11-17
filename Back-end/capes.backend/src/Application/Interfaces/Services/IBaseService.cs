using Capes.Domain.Models;

namespace Capes.Application.Interfaces.Services
{
    public interface IBaseService<T> where T : Entity, new()
    {
        Task<List<T>> List();
        Task<T> Get(int id);
        Task Create(T request);
        Task Update(T request);
        Task Delete(int id);
    }
}
