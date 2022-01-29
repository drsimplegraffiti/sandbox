`docker help`
verify installation = `docker --version`
docker ps to see running container

connect to docker deamon
docker ps
make sure the docker deamon is running first

## Docker images and containers

Image is a template for creating an environment of your choice.
Snap shot

## Container

Running instance of an image

##How to download image == Pull an image and run a container
Go to [hub docker](https://hub.docker.com)
Docker hub is a registry where you can download images

## To pull an image:

Go to docker hub
Click explore button
Search for images e.g nginx
then run: `docker pull <image name>`
e.g docker pull nginx

nginx:latest the latest here is the tag.

## To see a list of images we have locally run:

docker images

## run a container from the downloaded image

docker run <image namif its workie>:<tag>
docker run nginx:latest

This may or may not display any output. To verify if its working or not
open another cmd and run `docker container ls` to get a list of all running containers

## Detached mode

To avoid running 2 cmd for docker , we run a container in a detached mode
`docker run -d nginx:latest`
result: 5fcc6221937b1fdd4afa2a1c75a1f5233d1f5d104733448e6b4946971f1f94f1

---

## To view a list of running container

`docker container ls` or `docker ps` the latter is the preferrred way.

## Exposing ports

Means mapping our desired port to the containers port (host port to container port)
e.g localhost:8080 to Nginx port:80

To stop a container
`docker ps` to see a list of all running containers
`docker stop <container id>

Result: you get the container id back e.g 5fcc6221937b

## running and mapping docker to a specific port

docker run -d -p 8080:80 nginx:latest
doc:80ker run -d -p 3434 nginx:latest

---

## Exposing Multiple Ports

docker run -d -p 8080:80 -p 3000:80 nginx:latest

## Managing containers

Stop container -`docker stop <container id > or <container name> `
e.g `docker stop silly_blackburn`

## To start the container

`docker start <container id > or <container name>`
e.g `docker start silly_blackburn `

## To show the list of containers that are not running (docker ps --help) to see all docker ps functions

`docker ps -a`

`docker ps ` list only the running container while `docker ps -a` list both running and not running container.

## Deleting containers

`docker rm <container name or id> e.g `docker rm b480882ff475`

## To remove all containers in one single command

The -a flag means all, -q means quiet
`docker ps -aq`

The above command list all container ids only

To remove all use `docker rm $(docker ps -aq)`
Note this will not remove containers that are running currently

## To force remove a container even when it is running

`docker rm -f $(docker ps -aq)`

---

## Naming containers

stop all running containers first (force stop) i.e `docker rm -f $(docker ps -aq)`
then run:
`docker run --name todoapp -d -p 8080:80 nginx:latest`
To stop the container with a name
To start again = `docker stop todoapp`
To stop again = `docker start todoapp`

## Formatting Docker ps

`docker ps --format="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"`

To make this format easy to use, we export the string format in a variable
export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"

To use the string variable:
`docker ps --format=$FORMAT`

The command above will give you formated output while running `docker ps ` will give you default outpu

---

## Docker Volumes

Volumes allows us to share data (files or folders) between hosts and containers. Or between containers
docker run --name some-nginx -v /some/content:/usr/share/nginx/html:ro -d nginx

-v flag means volume
/some/content means source
/usr/share/nginx/html means destination
ro means read-only volume.

To share files

1. Create a new project folder with e.g index.html and create some contents in it
2. Remove and stop all running containers
3. Change directory to where your project folder is e.g cd docker-tut
4. in the project directory run a container and mount the volumes you want to transfer
   i.e `docker run --name website -v $(pwd):/usr/share/nginx/html:ro -d -p 8080:80 nginx`
   Before the above run `docker stop <container name>` and `docker rm <container name`
   So we mapped our present working direct $(pwd) to(:) /usr/share/nginx/html:ro

## Volumes Between Host And Containers

winpty docker exec -it test123 bash
cd /usr/share/nginx/html
ls -al

## Remove readonly options

`docker run --name test123 -v $(pwd):/usr/share/nginx/html -d -p 4345:80 nginx`

## Creating Dockerfile

i.e copy your own files into an image
i.e build our own image
in your IDE create a Dockerfile in the root folder

Type this
FROM nginx:latest
ADD . /usr/share/nginx/html

## Building images from docker file

go to cmd
navigate to the project folder
then run `docker build <--tag or -t > <name:version> <where is your docker file>`
i.e docker build --tag website:latest .

To see result: docker image ls

Then we a container from it, docker ps --format=$FORMAT

To run a container from our image run:
`docker run --name website -p 8080:80 -d website:latest`
the first website is our own name while the second is the actaul name of our image

always use "winpty" docker build --tag website:latest .
i.e winpty docker build --tag website:latest .

## caching and layering

```javascript
FROM node:latest
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD ["node", "index.js"]

```

## Alpine

reducing image sizes by pulling Alpine Docker images
`docker pull node:lts-alpine`
`docker pull nginx:alpine`

## Switching large (custom) images to alpine

In your Docker file change the `node:latest` to `node:alpine`

```javascript
FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2322

CMD ["node", "app.js"]
```

Then re build the images again

## Tagging and versioning

`docker pull node:8-alpine`
`FROM nginx:1.17.2-alpine`
`FROM node:10.16.1-alpine`
Then rebuild the images

## Tagging

docker tag nginx:alpine nodeapp:1

## Docker registries type

Private and Public

## Docker provider

Docker hub
quay.io
Amazon ECR

To push images to docker hub
go to docker hub > repositories > create repository
`docker push drsimplegraffiti/node-app:tagname`
To push you must be logged in

`docker login`
then docker push nodeapp:1

## debugging docker

`docker inspect container id`

## view logs for containers

`docker logs container id`

docker exec -it container-id /bin/bash
