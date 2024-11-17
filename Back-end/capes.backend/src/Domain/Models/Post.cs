namespace Capes.Domain.Models
{
    public class Post : Entity
    {
        public string Title { get; set; } = null!;
        public string Content { get; set; } = string.Empty;
        public List<string> Tags { get; set; } = null!;
        public List<Comment> Comments { get; set; } = null!;
        public User Owner { get; set; } = null!;
        public int OwnerId { get; set; }
    }
}
