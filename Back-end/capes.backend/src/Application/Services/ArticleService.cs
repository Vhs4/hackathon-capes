using Capes.Application.Interfaces.Services;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Capes.Application.Services
{
    public class ArticleService(string apiKey = "", string baseUrl = "https://api.openalex.org") : IArticleService
    {
        private readonly string _baseUrl = baseUrl;
        private readonly string _apiKey = apiKey;
        private static readonly HttpClient _httpClient = new HttpClient();

        public async Task<string> GetArtigos(string message, bool canProcess)
        {
            string keywords = canProcess ? await ProcessarMensagemAsync(message) : message;
            var artigos = await BuscarTrabalhosPorTituloAsync(keywords);
            string resposta = await GerarRespostaAsync(message, artigos);

            return resposta;
        }

        private async Task<string> ExtrairPalavrasChavesAsync(string mensagem)
        {
            var promptSistema = @"
                Analise a mensagem a seguir e extraia as palavras-chave que são relevantes para buscar em títulos de artigos científicos.
                Com as palavras, junte-as de forma concisa criando uma frase única para encontrar em títulos de artigos ou em textos.
            ";

            var listaMensagens = new[]
            {
                new { role = "system", content = promptSistema },
                new { role = "user", content = mensagem }
            };

            var requestBody = new
            {
                model = "gpt-4",
                messages = listaMensagens,
                max_tokens = 50,
                temperature = 0.3
            };

            var requestJson = JsonSerializer.Serialize(requestBody);
            var content = new StringContent(requestJson, Encoding.UTF8, "application/json");

            _httpClient.DefaultRequestHeaders.Clear();
            _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {_apiKey}");

            var response = await _httpClient.PostAsync("https://api.openai.com/v1/chat/completions", content);
            var responseJson = await response.Content.ReadAsStringAsync();

            using var document = JsonDocument.Parse(responseJson);
            var result = document.RootElement
                .GetProperty("choices")[0]
                .GetProperty("message")
                .GetProperty("content")
                .GetString();

            return result ?? string.Empty;
        }

        private async Task<string> ProcessarMensagemAsync(string mensagem)
        {
            return await ExtrairPalavrasChavesAsync(mensagem);
        }

        private async Task<List<Dictionary<string, object>>> BuscarTrabalhosPorTituloAsync(string titulo, int perPage = 10)
        {
            string tituloFormatado = Uri.EscapeDataString(titulo);
            string url = $"{_baseUrl}/works?search={tituloFormatado}&per_page={perPage}";

            try
            {
                HttpResponseMessage response = await _httpClient.GetAsync(url);
                response.EnsureSuccessStatusCode();

                string responseBody = await response.Content.ReadAsStringAsync();
                using JsonDocument document = JsonDocument.Parse(responseBody);

                var trabalhos = document.RootElement.GetProperty("results");
                var artigosFormatados = new List<Dictionary<string, object>>();

                foreach (var trabalho in trabalhos.EnumerateArray())
                {
                    var artigo = new Dictionary<string, object>
                    {
                        ["titulo"] = trabalho.GetProperty("title").GetString() ?? "Sem título",
                        ["autores"] = ObterAutores(trabalho),
                        ["ano_publicacao"] = trabalho.TryGetProperty("publication_year", out var anoPublicacao) ? anoPublicacao.GetInt32().ToString() : "Ano não disponível",
                        ["referência"] = trabalho.TryGetProperty("doi", out var referencia) ? referencia.GetString() : "doi não disponível"
                    };
                    artigosFormatados.Add(artigo);
                }

                return artigosFormatados;
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Erro ao buscar trabalhos: {e.Message}");
                return new List<Dictionary<string, object>>();
            }
        }

        private List<string> ObterAutores(JsonElement trabalho)
        {
            var autores = new List<string>();

            if (trabalho.TryGetProperty("authorships", out var authorships))
            {
                foreach (var author in authorships.EnumerateArray())
                {
                    if (author.GetProperty("author").TryGetProperty("display_name", out var displayName))
                    {
                        autores.Add(displayName.GetString());
                    }
                }
            }

            return autores;
        }

        private async Task<string> GerarRespostaAsync(string mensagemUsuario, List<Dictionary<string, object>> artigos)
        {
            string promptSistema = @"Você é um assistente de pesquisa científica que ajuda os usuários recomendando artigos baseados no tema que eles forneceram. 
        Crie uma RESPOSTA ao usuário que: Liste os 5 principais artigos com título, autores e a referência com o link do doi. Explique por que cada artigo é relevante para o tema solicitado.- Use linguagem clara, amigável e informativa.";

            var listaMensagens = new List<Dictionary<string, string>>
            {
                new Dictionary<string, string> { { "role", "system" }, { "content", promptSistema } },
                new Dictionary<string, string> { { "role", "user" }, { "content", $"Mensagem do usuário: {mensagemUsuario}" } },
                new Dictionary<string, string> { { "role", "assistant" }, { "content", $"Artigos encontrados:\n{FormatarArtigos(artigos)}" } }
            };

            var requestBody = new
            {
                model = "gpt-4",
                messages = listaMensagens,
                max_tokens = 1000,
                temperature = 0.3
            };

            string requestJson = JsonSerializer.Serialize(requestBody);
            var content = new StringContent(requestJson, Encoding.UTF8, "application/json");

            _httpClient.DefaultRequestHeaders.Clear();
            _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {_apiKey}");

            HttpResponseMessage response = await _httpClient.PostAsync("https://api.openai.com/v1/chat/completions", content);
            string responseJson = await response.Content.ReadAsStringAsync();

            using JsonDocument document = JsonDocument.Parse(responseJson);
            return document.RootElement.GetProperty("choices")[0].GetProperty("message").GetProperty("content").GetString() ?? "";
        }

        private string FormatarArtigos(List<Dictionary<string, object>> artigos)
        {
            var sb = new StringBuilder();
            int contador = 1;
            foreach (var artigo in artigos)
            {
                sb.AppendLine($"{contador}. Título: {artigo["titulo"]}");
                sb.AppendLine($"   Autores: {string.Join(", ", (List<string>)artigo["autores"])}");
                sb.AppendLine($"   Ano de Publicação: {artigo["ano_publicacao"]}");
                sb.AppendLine($"   Referência: {artigo["referência"]}");
                sb.AppendLine();
                contador++;
            }
            return sb.ToString();
        }
    }
}

