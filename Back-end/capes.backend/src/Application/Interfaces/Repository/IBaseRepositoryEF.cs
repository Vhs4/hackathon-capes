using Capes.Domain.Models;

namespace Capes.Application.Interfaces.Repository
{
    public interface IBaseRepositoryEF<T> : IDisposable where T : Entity
    {
        Task<List<T>> List();
        Task<T> Get(int id);
        Task Create(T request);
        Task Update(T request);
        Task Delete(int id);
    }
}
