# Usa uma imagem base do Node.js
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos necessários para o contêiner
COPY index.html .
COPY server.js .

# Instala as dependências do servidor
RUN npm install
RUN npm install @ngrok/ngrok

# Expõe a porta 8080
EXPOSE 8080

# Comando para iniciar o servidor quando o contêiner for iniciado
CMD ["node", "server.js"]
