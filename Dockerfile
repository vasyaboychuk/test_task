FROM node:18-alpine

MAINTAINER Vasyl Boichuk

RUN mkdir /app
WORKDIR /app

COPY ./server/package.json /app

RUN npm i