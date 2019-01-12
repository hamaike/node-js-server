FROM node:8.9.1-alpine

RUN mkdir -p /app

COPY ./ /app

WORKDIR /app

EXPOSE 3000

CMD ["node", "index.js"]