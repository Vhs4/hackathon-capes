


import openai

# Definindo a classe para o chatbot
class GetKeyWords:
    def __init__(self, api_key):
        openai.api_key = api_key

    def extrair_palavras_chaves(self, mensagem):
        prompt_sistema = """
        
            Analise a mensagem a seguir e extraia as palavras-chave que são relevantes para buscar em títulos de artigos científicos
            com as palavras, junte-as de forma conscisa criando uma frase única para encontrar em títulos de artigos ou em textos
        """
        
        lista_mensagens = [
        {
            "role": "system",
            "content": prompt_sistema
        },
        {
            "role": "user",
            "content": mensagem
        }
    ]
                
        response = openai.chat.completions.create(
            messages = lista_mensagens,
            model="gpt-4",  
            max_tokens=50,  
            temperature=0.3, 
        )

        return response.choices[0].message.content

    def processar_mensagem(self, mensagem):
        """
        Função principal para processar a mensagem e retornar as palavras-chave.
        """
        palavras_chaves = self.extrair_palavras_chaves(mensagem)
        return palavras_chaves

