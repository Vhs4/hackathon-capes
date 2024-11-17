
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace GetArtigos
{
    public class GetArtigos
    {
        private readonly string _baseUrl;
        private static readonly HttpClient _httpClient = new HttpClient();

        public GetArtigos(string baseUrl = "https://api.openalex.org")
        {
            _baseUrl = baseUrl;
        }

        public async Task<List<Dictionary<string, object>>> BuscarTrabalhosPorTituloAsync(string titulo, int perPage = 10)
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
    }
}
