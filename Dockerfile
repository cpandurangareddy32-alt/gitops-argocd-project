FROM  node:22-alpine

WORKDIR /app

COPY app/app.js ./app.js

EXPOSE	3000

CMD ["node", "app.js"]


