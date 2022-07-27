FROM node as builder
WORKDIR /frontend
COPY ./package.json /frontend
RUN npm i --force
COPY . .
ENTRYPOINT [ "npm", "start","--host=0.0.0.0" ]
