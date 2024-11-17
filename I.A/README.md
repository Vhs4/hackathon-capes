
# ChatBot - Recomendação de Artigos Científicos

Este é um chatbot que utiliza a API OpenAI (GPT-4) para analisar uma mensagem do usuário e recomendar artigos científicos relacionados com base em palavras-chave extraídas da mensagem. A aplicação busca artigos através da API OpenAlex e gera uma resposta personalizada com a seleção dos artigos mais relevantes.

## Sumário
- [Visão Geral](#visão-geral)
- [Como Funciona](#como-funciona)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Instalar](#como-instalar)
- [Como Usar](#como-usar)
- [Exemplo de Uso](#exemplo-de-uso)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Visão Geral

Este projeto é uma aplicação C# que integra a API OpenAI GPT-4 para gerar respostas inteligentes baseadas em artigos científicos. O fluxo do programa começa com o envio de uma mensagem pelo usuário, da qual são extraídas palavras-chave que são então usadas para buscar artigos relacionados. Após encontrar os artigos, o chatbot gera uma resposta explicativa, recomendando os artigos mais relevantes ao tema solicitado pelo usuário.

## Como Funciona

1. **Entrada do Usuário**: O usuário fornece uma mensagem com o tema de interesse.
2. **Extração de Palavras-chave**: O sistema usa a API OpenAI para analisar a mensagem e extrair palavras-chave.
3. **Busca de Artigos**: Com as palavras-chave extraídas, a aplicação consulta a API OpenAlex para buscar artigos científicos relevantes.
4. **Resposta do Chatbot**: A aplicação usa novamente a API OpenAI para gerar uma resposta, recomendando os 5 artigos mais relevantes, explicando por que cada um é pertinente ao tema solicitado.

## Tecnologias Utilizadas

- **C#**: Linguagem de programação utilizada para o desenvolvimento do aplicativo.
- **OpenAI GPT-4**: Usada para análise da mensagem do usuário e geração de respostas inteligentes.
- **OpenAlex API**: Utilizada para buscar artigos científicos baseados nas palavras-chave extraídas.
- **ASP.NET Core** (opcional, se for usado em um servidor web): Para implementação de qualquer funcionalidade web no futuro.

## Como Instalar

### Requisitos

- **.NET 6.0 ou superior** instalado no seu sistema.
- Uma chave de API da OpenAI. (Você pode obter uma chave de API em [OpenAI](https://beta.openai.com/signup/))
- Acesso à API OpenAlex ([documentação oficial](https://openalex.org/docs)).

### Passos para Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/chatbot-artigos.git
    cd chatbot-artigos
    ```

2. Crie um arquivo `appsettings.json` na raiz do projeto e adicione a sua chave de API da OpenAI:
    ```json
    {
      "OpenAI": {
        "ApiKey": "sua-chave-api-aqui"
      }
    }
    ```

3. Execute o projeto:
    ```bash
    dotnet run
    ```

O programa irá pedir para você digitar uma mensagem. Após isso, ele analisará a mensagem, buscará artigos científicos relacionados e retornará uma resposta com as recomendações.

## Como Usar

1. **Execute a aplicação**:
    Após a execução do comando `dotnet run`, a aplicação pedirá para você digitar uma mensagem com um tema de interesse.

2. **Receba a resposta**:
    O chatbot vai retornar uma lista de 5 artigos científicos relevantes para o tema da mensagem, explicando por que cada um é relevante.

3. **Interaja com o Chatbot**:
    Você pode continuar enviando novas mensagens para obter recomendações sobre outros temas.

## Exemplo de Uso

```bash
Digite a mensagem para análise e recomendação de artigos:
"Quais são os últimos avanços em aprendizado de máquina?"
Resposta do chatbot:
1. Título: "Deep Learning for Natural Language Processing"
   Autores: John Doe, Jane Smith
   Ano de Publicação: 2023
   Referência: [doi:10.1000/abcd1234]

   Explicação: Este artigo aborda os últimos avanços no processamento de linguagem natural, que é uma área fundamental no aprendizado de máquina.

2. Título: "Recent Trends in Machine Learning Algorithms"
   Autores: Alan Turing, Ada Lovelace
   Ano de Publicação: 2022
   Referência: [doi:10.1000/efgh5678]

   Explicação: O artigo explora as tendências mais recentes em algoritmos de aprendizado de máquina, com ênfase em redes neurais.

3. Título: "Machine Learning in Healthcare"
   Autores: Bill Gates, Tim Berners-Lee
   Ano de Publicação: 2021
   Referência: [doi:10.1000/hijk91011]

   Explicação: O estudo explora como o aprendizado de máquina está sendo aplicado em sistemas de saúde para diagnósticos mais rápidos e precisos.
