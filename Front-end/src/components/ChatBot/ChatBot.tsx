import React, { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CopyIcon } from 'lucide-react'

const API_KEY = "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";
const systemMessage = { role: "system", content: "Analise a mensagem a seguir e extraia as palavras-chave que são relevantes para buscar em títulos de artigos científicos. Com as palavras, junte-as de forma concisa criando uma frase única para encontrar em títulos de artigos ou em textos. Use termos em inglês para melhorar os resultados da busca." };

interface Message {
  content: string;
  timestamp: string;
  sender: "user" | "ChatGPT" | "OpenAlex";
}

interface Article {
  titulo: string;
  autores: string;
  ano_publicacao: string;
  referencia: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Olá! Sou o CAPESLab, seu assistente de pesquisa. Sobre qual tópico você gostaria de encontrar artigos científicos?",
      timestamp: "agora",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
      content: input,
      timestamp: new Date().toLocaleTimeString(),
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsTyping(true);

    await processMessageToChatGPT([...messages, newMessage]);
  };

  async function processMessageToChatGPT(chatMessages: Message[]) {
    const apiMessages = chatMessages.map((messageObject) => ({
      role: messageObject.sender === "ChatGPT" ? "assistant" : "user",
      content: messageObject.content,
    }));

    const apiRequestBody = {
      model: "gpt-4",
      messages: [systemMessage, ...apiMessages],
      max_tokens: 50,
      temperature: 0.3
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      });

      const data = await response.json();
      const searchQuery = data.choices[0].message.content;

      const newMessage: Message = {
        content: `Buscando artigos relacionados a: "${searchQuery}"`,
        timestamp: new Date().toLocaleTimeString(),
        sender: "ChatGPT",
      };

      setMessages((prev) => [...prev, newMessage]);

      // Fetch articles from OpenAlex API
      const articles = await fetchArticlesFromOpenAlex(searchQuery);

      if (articles.length > 0) {
        const articlesMessage: Message = {
          content: formatArticles(articles),
          timestamp: new Date().toLocaleTimeString(),
          sender: "OpenAlex",
        };
        setMessages((prev) => [...prev, articlesMessage]);
      } else {
        const noResultsMessage: Message = {
          content: "Desculpe, não foram encontrados artigos para esta busca. Tente reformular sua pergunta ou usar termos mais gerais.",
          timestamp: new Date().toLocaleTimeString(),
          sender: "OpenAlex",
        };
        setMessages((prev) => [...prev, noResultsMessage]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
      const errorMessage: Message = {
        content: "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.",
        timestamp: new Date().toLocaleTimeString(),
        sender: "ChatGPT",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }

  async function fetchArticlesFromOpenAlex(query: string): Promise<Article[]> {
    const baseUrl = "https://api.openalex.org";
    const encodedQuery = encodeURIComponent(query);
    const url = `${baseUrl}/works?filter=title.search:${encodedQuery}&sort=relevance_score:desc&per_page=5`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        throw new Error("No results found.");
      }

      return data.results.map((work: any) => ({
        titulo: work.title || "Sem título",
        autores: work.authorships?.map((authorship: any) => authorship.author.display_name).join(", ") || "Autores não disponíveis",
        ano_publicacao: work.publication_year?.toString() || "Ano não disponível",
        referencia: work.doi || "DOI não disponível",
      }));
    } catch (error) {
      console.error("Erro ao buscar artigos:", error);
      return [];
    }
  }

  function formatArticles(articles: Article[]): string {
    if (articles.length === 0) {
      return "Nenhum artigo encontrado.";
    }

    return articles.map((article, index) => `
      Artigo ${index + 1}:
      Título: ${article.titulo}
      Autores: ${article.autores}
      Ano de Publicação: ${article.ano_publicacao}
      Referência: ${article.referencia.startsWith("http") || article.referencia.startsWith("doi:")
        ? `<a href="${article.referencia}" style="font-weight: bold; color: #3b82f6; text-decoration: none;" target="_blank" rel="noopener noreferrer">Clique aqui para acessar</a>`
        : article.referencia
      }
    `).join("\n\n");
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Mensagem copiada!");
    }).catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
  }

  return (
    <Card className="w-full h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>CAPESLab</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full pr-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
            >
              <div className={`flex items-center ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <Avatar className="w-8 h-8">
                  <AvatarImage src={message.sender === "user" ? "/user-avatar.png" : "/imgs/logogptpintada.png"} />
                  <AvatarFallback>
                    {message.sender === "user" ? "U" : message.sender === "ChatGPT" ? "AI" : "OA"}
                  </AvatarFallback>
                </Avatar>
                <div className={`mx-2 py-2 px-3 rounded-lg ${message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                  {message.sender === "ChatGPT" && (
                    <p className="text-xs font-bold text-start my-1">CAPESLab</p>
                  )}
                  <p className="text-sm whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: message.content }} />
                  <div className="flex justify-between mt-1">
                  <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
                  {message.sender !== "user" && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(message.content)}
                  >
                    Copiar
                    <CopyIcon />
                  </Button>
                  )}                  
                  </div>
                </div>
              </div>
            </div>
          ))}
                  {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="flex items-end">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="mx-2 py-2 px-3 rounded-lg bg-muted">
                  <p className="text-sm">Processando...</p>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <form onSubmit={handleSend} className="w-full flex items-center space-x-2">
          <Input
            placeholder="Digite sua mensagem"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default ChatBot;
