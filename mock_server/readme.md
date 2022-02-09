## Docker file

```javascript
FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]
```

## Docker ignore file [.dockerignore]

> node_modules

## Build docker

> docker build --tag node-docker .

## To create a new tag for the image we built above, run the following command.

> docker tag node-docker:latest node-docker:v1.0.0

## Remove tag on images

> docker rmi node-docker:v1.0.0
