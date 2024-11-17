using Capes.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Capes.Infra.Context
{
    public class AppDbContext(DbContextOptions<AppDbContext> opts) : DbContext(opts)
    {
        protected override void OnModelCreating(ModelBuilder builder)
        {
            // Configuração da relação entre Badge e User
            builder.Entity<Badge>()
                .HasOne(x => x.User)
                .WithMany(x => x.Badges)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Cascade); // Exclusão em cascata ao deletar um User

            // Configuração da relação entre Post e Owner
            builder.Entity<Post>()
                .HasOne(x => x.Owner)
                .WithMany(x => x.Posts)
                .HasForeignKey(x => x.OwnerId)
                .OnDelete(DeleteBehavior.Cascade); // Exclusão em cascata ao deletar um Owner

            // Configuração da relação entre Comment e User
            builder.Entity<Comment>()
                .HasOne(x => x.User)
                .WithMany(x => x.Comments)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            // Configuração da relação entre Comment e Post
            builder.Entity<Comment>()
                .HasOne(x => x.Post)
                .WithMany(x => x.Comments)
                .HasForeignKey(x => x.PostId)
                .OnDelete(DeleteBehavior.Cascade); // Exclusão em cascata ao deletar um Post

            builder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            base.OnModelCreating(builder); // Chama o método base (se necessário)
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Badge> Badges { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Post> Posts { get; set; }
    }
}
