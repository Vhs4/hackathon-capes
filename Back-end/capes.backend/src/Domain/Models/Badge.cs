namespace Capes.Domain.Models
{
    public class Badge : Entity
    {
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public User User { get; set; } = null!;
        public int UserId { get; set; }

    }
}
