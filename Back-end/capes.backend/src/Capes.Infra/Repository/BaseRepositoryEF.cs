using Capes.Application.Interfaces.Repository;
using Capes.Domain.Exceptions;
using Capes.Domain.Models;
using Capes.Infra.Context;
using Microsoft.EntityFrameworkCore;

namespace Capes.Infra.Repository
{
    public class BaseRepositoryEF<T>(AppDbContext db) : BaseRepositoryProperties<T>(db) ,IBaseRepositoryEF<T> 
        where T : Entity, new()
    {
        public virtual async Task<List<T>> List()
        {
            return await dbSet.AsNoTracking().ToListAsync();
        }
        public virtual async Task<T> Get(int id)
        {
            return await dbSet.FindAsync(id) ?? throw new BusinessException($"Registro {id} não encontrado");
        }
        public virtual async Task Create(T entity)
        {
            await dbSet.AddAsync(entity);
            await SaveChanges();
        }

        public virtual async Task Delete(int id)
        {
            // OLHAR DEPOIS ISSO
            dbSet.Remove(new T { Id = id });
            await SaveChanges();
        }
        public virtual async Task Update(T entity)
        {
            dbSet.Update(entity);
            await SaveChanges();
        }
    }
}
