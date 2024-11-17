namespace Capes.Domain.Models
{
    public class Comment : Entity
    {
        public string Content { get; set; } = null!;
        public DateTime Date { get; set; }
        public User User { get; set; } = null!;
        public int UserId { get; set; }
        public Post Post { get; set; } = null!;
        public int PostId { get; set; }
    }
}
