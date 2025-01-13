# Usar uma imagem do node
FROM node:14

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install
RUN npm install dotenv

# Copiar o restante do código do projeto
COPY . .

# Expor a porta em que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
