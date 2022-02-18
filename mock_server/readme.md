## Docker file

```javascript
FROM node:12.18.1
ENV NODE_ENV=production
ENV PORT=8080  //i.e if you have a port as an Env
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

## Create a new volume

> docker volume create [name of volume to be created]
> docker volume create node-config

## Mount volume

<!-- And then, when you go to run your Docker container, link it to the target in the container with the --mount flag: -->

```javascript
docker run -d \
--name devtest \
--mount source=nginx-config,target=/etc/nginx \
nginx:latest
```
