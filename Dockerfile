FROM node:14.15.3-alpine3.11

WORKDIR /dyno-app

COPY package.json /dyno-app

RUN npm install

RUN npm install --save gh-pages

COPY . /dyno-app

CMD ["npm", "start"]

