using Capes.Domain.Enums;

namespace Capes.Domain.Models
{
    public class User : Entity
    {
        public string Name  { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; }
        public string SchoolOrCollegue { get; set; } = string.Empty;
        public string? Course { get; set; } = string.Empty;
        public CourseType CourseType { get; set; }
        public CourseStatus CourseStatus { get; set; }
        public string Gender { get; set; } = null!;
        public string ResearchArea { get; set; } = string.Empty;
        public string? CurrentProfession { get; set; }
        public List<Badge> Badges { get; set; } = null!;
        public List<Post> Posts { get; set; } = null!;
        public List<Comment> Comments { get; set; } = null!;
    }
}
