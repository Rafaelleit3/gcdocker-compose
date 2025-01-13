# Aplicação de E-commerce

Esta é uma aplicação de e-commerce desenvolvida como parte da disciplina de Gerência de Configuração (2024.2) na UFC.

## Visão Geral do Projeto

A aplicação permite aos usuários:
- Visualizar uma lista de produtos
- Adicionar novos produtos
- Editar produtos existentes
- Deletar produtos
- Adicionar produtos ao carrinho
- Visualizar o carrinho
- Remover produtos do carrinho
- Limpar o carrinho

## Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize (ORM)
- PostgreSQL
- HTML/CSS/JavaScript

## Instruções de Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/gcdocker.git
   cd gcdocker
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` com o seguinte conteúdo:
   ```plaintext
   POSTGRES_DB=seu_banco_de_dados
   POSTGRES_USER=seu_usuario
   POSTGRES_PASSWORD=sua_senha
   ```

4. Inicie a aplicação:
   ```bash
   npm start
   ```

5. Abra o navegador e navegue para `http://localhost:3000`.

## Estrutura do Projeto

- `app.js`: Arquivo principal da aplicação
- `config/database.js`: Configuração do banco de dados
- `routes/products.js`: Rotas para gerenciamento de produtos
- `routes/cart.js`: Rotas para gerenciamento do carrinho
- `public/`: Arquivos estáticos (HTML, CSS, JavaScript)
- `.gitignore`: Arquivo de configuração do Git
- `README.md`: Documentação do projeto

## Licença

Este projeto está licenciado sob a Licença MIT.
