using Capes.Application.Interfaces.Repository;
using Capes.Domain.Exceptions;
using Capes.Domain.Models;
using Capes.Infra.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Capes.Infra.Repository
{
    public class UserRepository(AppDbContext db) : BaseRepositoryProperties<User>(db), IUserRepository
    {
        public async Task<User> GetUserByEmailAndPassword(string email, string password)
        {
            return await dbSet.FirstOrDefaultAsync(x => x.Email.ToLower() == email.ToLower() && x.Password.ToLower() == password.ToLower())
                ?? throw new BusinessException("Credenciais inválidas");
        }
    }
}
