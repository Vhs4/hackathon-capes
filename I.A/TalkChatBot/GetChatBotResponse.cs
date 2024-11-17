
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace ChatBotHandler
{
    public class GetChatBotResponse
    {
        private readonly string _apiKey;
        private static readonly HttpClient _httpClient = new HttpClient();

        public GetChatBotResponse(string apiKeyOpenAI)
        {
            _apiKey = apiKeyOpenAI;
        }

        public async Task<string> GerarRespostaAsync(string mensagemUsuario, List<Dictionary<string, object>> artigos)
        {
            string promptSistema = @"\nVocê é um assistente de pesquisa científica que ajuda os usuários recomendando artigos baseados no tema que eles forneceram.\nVocê recebe:\n1. A mensagem original do usuário.\n2. Uma lista de artigos científicos.\n\nAnalise os 10 artigos enviados, e selecione APENAS os 5 que mais estão relacionados com a mensagem do usuário, e\n\nCrie uma RESPOSTA ao usuário que:\n- Liste os 5 principais artigos com título e autores.\n- Explique por que cada artigo é relevante para o tema solicitado.\n- Use linguagem clara, amigável e informativa.\n";

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