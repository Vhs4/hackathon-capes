
import openai


class ChatBotResposta:
    def __init__(self, api_key_openai):
        openai.api_key = api_key_openai

    def gerar_resposta(self, mensagem_usuario, artigos):
        prompt_sistema = """
        Você é um assistente de pesquisa científica que ajuda os usuários recomendando artigos baseados no tema que eles forneceram.
        Você recebe:
        1. A mensagem original do usuário.
        2. Uma lista de artigos científicos.
        
        Analise os 10 artigos enviados, e selecione os 5 que mais está relacionado com a mensagem do usuário, e
        
        Crie uma RESPOSTA ao usuário que:
        - Liste os 5 principais artigos com título e autores.
        - Explique por que cada artigo é relevante para o tema solicitado.
        - Use linguagem clara, amigável e informativa.
        """

        
        lista_mensagens = [
            {"role": "system", "content": prompt_sistema},
            {"role": "user", "content": f"Mensagem do usuário: {mensagem_usuario}"},
            {"role": "assistant", "content": f"Artigos encontrados:\n{artigos}"}
        ]

        response = openai.chat.completions.create(
            model="gpt-4",
            messages=lista_mensagens,
            max_tokens=1000,
            temperature=0.3
        )
        
        return response.choices[0].message.content