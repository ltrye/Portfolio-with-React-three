FROM node:alpine
WORKDIR /api

COPY package.json /api
# COPY package-lock.json /app

RUN npm install

COPY . .

EXPOSE 3000

# You can change this
CMD [ "npm", "run", "server"]