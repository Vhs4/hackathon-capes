
import Recomendacao.GetKeyWords as KW
from Recomendacao.GetKeyWords import GetKeyWords
from Recomendacao.GetArtigos import GetArtigos
from Recomendacao.AnswerChatBot import ChatBotResposta
import time

api_key_openai = "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"
start_time = time.time()

mensagem_usuario = "Como a governança de TI pode promover inovação e vantagem competitiva para a empresa?" 

get_keywords = GetKeyWords(api_key_openai)
keywords = get_keywords.processar_mensagem(mensagem_usuario)

keywords_teste = "Aprendizado de máquina aplicações em saúde"
get_artigos = GetArtigos() 
artigos = get_artigos.buscar_trabalhos_por_titulo(keywords)

chatbot = ChatBotResposta(api_key_openai)
resposta = chatbot.gerar_resposta(mensagem_usuario=mensagem_usuario, artigos=artigos)
print(resposta)

end_time = time.time()
print(end_time-start_time)



















