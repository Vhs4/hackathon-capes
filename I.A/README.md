
# ChatBot - Recomenda��o de Artigos Cient�ficos

Este � um chatbot que utiliza a API OpenAI (GPT-4) para analisar uma mensagem do usu�rio e recomendar artigos cient�ficos relacionados com base em palavras-chave extra�das da mensagem. A aplica��o busca artigos atrav�s da API OpenAlex e gera uma resposta personalizada com a sele��o dos artigos mais relevantes.

## Sum�rio
- [Vis�o Geral](#vis�o-geral)
- [Como Funciona](#como-funciona)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Instalar](#como-instalar)
- [Como Usar](#como-usar)
- [Exemplo de Uso](#exemplo-de-uso)
- [Contribuindo](#contribuindo)
- [Licen�a](#licen�a)

## Vis�o Geral

Este projeto � uma aplica��o C# que integra a API OpenAI GPT-4 para gerar respostas inteligentes baseadas em artigos cient�ficos. O fluxo do programa come�a com o envio de uma mensagem pelo usu�rio, da qual s�o extra�das palavras-chave que s�o ent�o usadas para buscar artigos relacionados. Ap�s encontrar os artigos, o chatbot gera uma resposta explicativa, recomendando os artigos mais relevantes ao tema solicitado pelo usu�rio.

## Como Funciona

1. **Entrada do Usu�rio**: O usu�rio fornece uma mensagem com o tema de interesse.
2. **Extra��o de Palavras-chave**: O sistema usa a API OpenAI para analisar a mensagem e extrair palavras-chave.
3. **Busca de Artigos**: Com as palavras-chave extra�das, a aplica��o consulta a API OpenAlex para buscar artigos cient�ficos relevantes.
4. **Resposta do Chatbot**: A aplica��o usa novamente a API OpenAI para gerar uma resposta, recomendando os 5 artigos mais relevantes, explicando por que cada um � pertinente ao tema solicitado.

## Tecnologias Utilizadas

- **C#**: Linguagem de programa��o utilizada para o desenvolvimento do aplicativo.
- **OpenAI GPT-4**: Usada para an�lise da mensagem do usu�rio e gera��o de respostas inteligentes.
- **OpenAlex API**: Utilizada para buscar artigos cient�ficos baseados nas palavras-chave extra�das.
- **ASP.NET Core** (opcional, se for usado em um servidor web): Para implementa��o de qualquer funcionalidade web no futuro.

## Como Instalar

### Requisitos

- **.NET 6.0 ou superior** instalado no seu sistema.
- Uma chave de API da OpenAI. (Voc� pode obter uma chave de API em [OpenAI](https://beta.openai.com/signup/))
- Acesso � API OpenAlex ([documenta��o oficial](https://openalex.org/docs)).

### Passos para Instala��o

1. Clone o reposit�rio:
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

O programa ir� pedir para voc� digitar uma mensagem. Ap�s isso, ele analisar� a mensagem, buscar� artigos cient�ficos relacionados e retornar� uma resposta com as recomenda��es.

## Como Usar

1. **Execute a aplica��o**:
    Ap�s a execu��o do comando `dotnet run`, a aplica��o pedir� para voc� digitar uma mensagem com um tema de interesse.

2. **Receba a resposta**:
    O chatbot vai retornar uma lista de 5 artigos cient�ficos relevantes para o tema da mensagem, explicando por que cada um � relevante.

3. **Interaja com o Chatbot**:
    Voc� pode continuar enviando novas mensagens para obter recomenda��es sobre outros temas.

## Exemplo de Uso

```bash
Digite a mensagem para an�lise e recomenda��o de artigos:
"Quais s�o os �ltimos avan�os em aprendizado de m�quina?"
Resposta do chatbot:
1. T�tulo: "Deep Learning for Natural Language Processing"
   Autores: John Doe, Jane Smith
   Ano de Publica��o: 2023
   Refer�ncia: [doi:10.1000/abcd1234]

   Explica��o: Este artigo aborda os �ltimos avan�os no processamento de linguagem natural, que � uma �rea fundamental no aprendizado de m�quina.

2. T�tulo: "Recent Trends in Machine Learning Algorithms"
   Autores: Alan Turing, Ada Lovelace
   Ano de Publica��o: 2022
   Refer�ncia: [doi:10.1000/efgh5678]

   Explica��o: O artigo explora as tend�ncias mais recentes em algoritmos de aprendizado de m�quina, com �nfase em redes neurais.

3. T�tulo: "Machine Learning in Healthcare"
   Autores: Bill Gates, Tim Berners-Lee
   Ano de Publica��o: 2021
   Refer�ncia: [doi:10.1000/hijk91011]

   Explica��o: O estudo explora como o aprendizado de m�quina est� sendo aplicado em sistemas de sa�de para diagn�sticos mais r�pidos e precisos.
