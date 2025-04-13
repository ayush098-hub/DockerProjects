FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
EXPOSE 5432
CMD ["node","server.js"]

