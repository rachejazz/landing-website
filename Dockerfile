FROM node:14.15.3-alpine3.11

WORKDIR /dyno-app

COPY package.json /dyno-app

RUN apk --no-cache add git

RUN git config --list

RUN npm install

RUN npm install --save gh-pages

COPY . /dyno-app

RUN git config user.email "divyadeepti2000@gmail.com"

RUN git config user.name "rachejazz"

CMD ["npm", "run", "deploy"]

