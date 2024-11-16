import requests

class GetArtigos:
    def __init__(self, base_url="https://api.openalex.org"):
        self.base_url = base_url

    def buscar_trabalhos_por_titulo(self, titulo, per_page=10):
        titulo_formatado = titulo.replace(" ", "%20")
        url = f"{self.base_url}/works?search={titulo_formatado}&per_page={per_page}"
        response = requests.get(url)
        
        if response.status_code == 200:
            trabalhos = response.json().get('results', [])
            artigos_formatados = []
            for trabalho in trabalhos:
                artigo = {
                    "titulo": trabalho.get("title", "Sem título"),
                    "autores": [autor["author"]["display_name"] for autor in trabalho.get("authorships", [])],
                    "ano_publicacao": trabalho.get("publication_year", "Ano não disponível"),
                    "referência": trabalho.get("doi", "doi não disponível"),
                }
                artigos_formatados.append(artigo)

            return artigos_formatados
        else:
            # TRABALHAR AQUI
            print(f"Erro ao buscar trabalhos: {response.status_code}")
            return []