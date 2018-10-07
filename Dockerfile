FROM node:10.11
WORKDIR /app
COPY package* /app/
RUN npm install
COPY . /app/
RUN npm run build
EXPOSE 8080
ENTRYPOINT [ "node", "src/server.js" ]
