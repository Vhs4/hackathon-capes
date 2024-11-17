using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GetKeyWords;
using GetArtigos;
using ChatBotHandler;

namespace ChatBot
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var apiKeyOpenAI = "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";

            Console.WriteLine("Digite a mensagem para análise e recomendação de artigos:");
            string mensagemUsuario = Console.ReadLine();

            var getKeyWords = new GetKeyWords.GetKeyWords(apiKeyOpenAI);
            string keywords = await getKeyWords.ProcessarMensagemAsync(mensagemUsuario);

            var getArtigos = new GetArtigos.GetArtigos();
            var artigos = await getArtigos.BuscarTrabalhosPorTituloAsync(keywords);

            var chatBotResponse = new GetChatBotResponse(apiKeyOpenAI);
            string resposta = await chatBotResponse.GerarRespostaAsync(mensagemUsuario, artigos);

            Console.WriteLine("Resposta do chatbot:");
            Console.WriteLine(resposta);
        }
    }
}


////
// TESTE GetKeyWords

//var apiKey = "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";

//var getKeyWords = new GetKeyWords(apiKey);

//Console.WriteLine("Digite a mensagem para análise:");
//var mensagem = Console.ReadLine();

//var palavrasChaves = await getKeyWords.ProcessarMensagemAsync(mensagem);

//Console.WriteLine("Palavras-chave extraídas:");
//Console.WriteLine(palavrasChaves);


// TESTE ARTIGOS
//var getArtigos = new GetArtigos();

//string titulo = "Inteligência Artificial na Saúde";

//var artigos = await getArtigos.BuscarTrabalhosPorTituloAsync(titulo);

//Console.WriteLine("Artigos encontrados:");
//foreach (var artigo in artigos)
//{
//    Console.WriteLine($"Título: {artigo["titulo"]}");
//    Console.WriteLine($"Autores: {string.Join(", ", (List<string>)artigo["autores"])}");
//    Console.WriteLine($"Ano de Publicação: {artigo["ano_publicacao"]}");
//    Console.WriteLine($"Referência: {artigo["referência"]}");
//    Console.WriteLine();
//}