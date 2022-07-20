FROM node as builder
WORKDIR /frontend
COPY ./package.json /frontend
RUN npm i --force
COPY . .
RUN npm start