FROM node:14.17.0-alpine

LABEL maintainer="danielbatistagalvao@hotmail.com"

WORKDIR /var/www/backend/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 9000
CMD [ "npm", "start", "--preserveWatchOutput" ]