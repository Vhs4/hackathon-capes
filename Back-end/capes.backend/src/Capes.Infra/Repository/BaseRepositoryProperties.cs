using Capes.Infra.Context;
using Microsoft.EntityFrameworkCore;

namespace Capes.Infra.Repository
{
    public class BaseRepositoryProperties<T>(AppDbContext db) where T : class
    {
        protected readonly AppDbContext db = db;
        protected readonly DbSet<T> dbSet = db.Set<T>();

        public async Task<int> SaveChanges()
        {
            return await db.SaveChangesAsync();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
        }
    }
}
