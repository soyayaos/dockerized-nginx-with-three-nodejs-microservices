FROM node:alpine

WORKDIR /opt/app

COPY *.json ./

RUN npm i -g pnpm

RUN pnpm i

COPY . ./

CMD ["pnpm", "start"]
