using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Capes.Domain.Models
{
    public class Article
    {
        public int Contador { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Authors { get; set; }
        public string PostYear { get; set; }
        public string Reference { get; set; }
    }
}
