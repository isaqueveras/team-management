FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
COPY .env ./dist/
COPY ormconfig.js ./dist/

EXPOSE 8081 5432

CMD ["npm", "start"]
