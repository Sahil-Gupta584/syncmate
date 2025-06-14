FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json
COPY ./apps/backend ./apps/backend
COPY ./packages ./packages

RUN npm i
RUN npm db:generate

EXPOSE 3000

CMD [ "npm","run","backend" ]