```javascript
FROM node:latest    //here we use node as our base image

WORKDIR /usr/src/app //here we create a folder path in our container

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2322

CMD ["node", "app.js"]
```

```javascript
FROM node:latest
WORKDIR /app
ADD . .
RUN npm install
CMD ["node", "index.js"]
Then build inside the project folder using:
docker build --tag <give the image a name here>:<tag> .   //the . means where the docker files is located
docker build --tag node-app:latest .
```

## Ignore

```
node_modules
.Dockerfile
.dockerignore
.git
npm-debug.log
```

## Build

`docker build -t node-webapp .`

## Check images

`docker images`

## Run container

`docker run -d -p 2322:4000 node-webapp`

## To see list of running containers

`docker ps`

## Docker logs

`docker logs <container id> `
`docker logs 6a455bf19378`

## TEST

`on browser localhost:2322`er

## interactive

`docker exec -it <container id> /bin/bash`

## Layering and Caching

```javascript
FROM node:latest
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD ["node", "index.js"]

```

## reference link
[here](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)