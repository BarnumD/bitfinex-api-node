FROM node:8

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

CMD ["node", "my_trades"]