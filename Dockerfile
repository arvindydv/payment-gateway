FROM node:16.20.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env

EXPOSE 5000

CMD ["node", "index.js"]