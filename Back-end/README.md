# **API de Gerenciamento de Usuários e Busca de Artigos**

## **Descrição**

Esta API foi desenvolvida utilizando **.NET Core** e oferece:

- **Cadastro e login de usuários** com autenticação baseada em **JWT**.
- Rotas para **buscar artigos** na OpenAlex.
- Rotas para **buscar artigos processados por inteligência artificial**.

---

## **Tecnologias Utilizadas**

- **Linguagem**: C#
- **Framework**: .NET Core
- **Banco de Dados**: [ex.: SQL Server, MySQL]
- **Autenticação**: JWT (JSON Web Token)
- **Integrações**: OpenAlex API, IA personalizada

---

## **Requisitos**

- **SDK do .NET Core**: [versão utilizada no projeto]
- **Banco de Dados**: Configurado conforme as instruções abaixo.
- **Ferramenta de Gerenciamento de Pacotes**: NuGet (incluso no .NET SDK).

---

## **Instalação**

1. Clone este repositório:
   git clone https://github.com/seu_usuario/hackathon-capes.git
   cd seu_repositorio

## **Configurações de banco e Secrets**

{
"ConnectionStrings": {
"DefaultConnection": "Server=localhost;Database=SeuBancoDeDados;User Id=seu_usuario;Password=sua_senha;"
},
"JwtSettings": {
"Secret": "sua_chave_secreta",
"Issuer": "sua_issuer",
"Audience": "sua_audience",
"ExpirationInMinutes": 60
},
"OpenAlex": {
"ApiKey": "sua_chave_openalex"
},
"AISettings": {
"ApiKey": "sua_chave_ia"
}
}
