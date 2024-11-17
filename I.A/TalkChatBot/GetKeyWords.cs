using System;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace GetKeyWords
{
    class GetKeyWords
    {
        private readonly string _apiKey;
        private static readonly HttpClient _httpClient = new HttpClient();

        public GetKeyWords(string apiKey)
        {
            _apiKey = apiKey;
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

        public async Task<string> ProcessarMensagemAsync(string mensagem)
        {
            return await ExtrairPalavrasChavesAsync(mensagem);
        }
    }
}
