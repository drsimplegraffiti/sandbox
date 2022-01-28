```javascript
FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2322

CMD ["node", "app.js"]
```

## Ignore
```
node_modules
.Dockerfile
.dockerignore
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