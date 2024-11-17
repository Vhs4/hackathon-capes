using Capes.Application.Interfaces.Services;
using Capes.Domain.Exceptions;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using System.Text.RegularExpressions;

namespace Capes.Api.Controllers
{
    [ApiController]
    [Route("ia")]
    public class ArticleController(IArticleService articleService) : ControllerBase
    {
        private readonly IArticleService articleService = articleService;

        [HttpPost("article-ia")]
        public async Task<IActionResult> GetArticleWithIA([FromBody][Required(ErrorMessage = "Mensagem obrigatória")] string message)
        {
            try
            {
                var response = await articleService.GetArtigos(message, true);
                var artigos = ExtrairArtigos(response);
                string json = JsonSerializer.Serialize(artigos, new JsonSerializerOptions { WriteIndented = true });
                return Ok(json);
            }
            catch (BusinessException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "Ocorreu um erro inesperado. Tente novamente mais tarde.",
                    error = ex.Message // Opcional: Remover para evitar vazamento de informações
                });
            }
        }

        [HttpPost("article")]
        public async Task<IActionResult> GetArticles([FromBody][Required(ErrorMessage = "Mensagem obrigatória")] string message)
        {
            try
            {
                var response = await articleService.GetArtigos(message, false);
                var artigos = ExtrairArtigos(response);
                string json = JsonSerializer.Serialize(artigos, new JsonSerializerOptions { WriteIndented = true });
                return Ok(json);
            }
            catch (BusinessException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "Ocorreu um erro inesperado. Tente novamente mais tarde.",
                    error = ex.Message // Opcional: Remover para evitar vazamento de informações
                });
            }
        }

        private List<Dictionary<string, string>> ExtrairArtigos(string texto)
        {
            var artigos = new List<Dictionary<string, string>>();

            // Regex para extrair os dados
            string padrao = @"\d+\.\s""(?<titulo>.+?)""\spor\s(?<autores>.+?)\.\s(?<descricao>.+?)\.\s\[Link para o artigo\]\((?<link>.+?)\)";
            var matches = Regex.Matches(texto, padrao, RegexOptions.Singleline);

            foreach (Match match in matches)
            {
                var artigo = new Dictionary<string, string>
            {
                { "Titulo", match.Groups["titulo"].Value },
                { "Autores", match.Groups["autores"].Value },
                { "Descricao", match.Groups["descricao"].Value },
                { "Link", match.Groups["link"].Value }
            };

                artigos.Add(artigo);
            }

            return artigos;
        }
    }
}
