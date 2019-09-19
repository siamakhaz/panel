FROM node:latest AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM alpine
WORKDIR /app
RUN apk add --no-cache --update nodejs nodejs-npm
RUN npm install -g http-server
COPY --from=builder /app/dist /app/dist
#i dont know why i should add this one if i dont there will be error for barcode generator
# COPY dist/JsBarcode.all.min.js dist/generator/
CMD [ "http-server", "dist", "-p 80" ]
