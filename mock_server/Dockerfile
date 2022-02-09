# Base image we would like to use for our application.
FROM node:17-alpine

# Environment variable which an application is running
ENV NODE_ENV=production

# Working Directory instructs Docker to use this path as the default location for all subsequent commands.
WORKDIR /app


# Copy package.json and package-lock.jsono into our images
#  The COPY command takes two parameters: src and dest. 
# The first parameter src tells Docker what file(s) you would like to copy into the image. 
# The second parameter dest tells Docker where you want that file(s) to be copied to.
# This allows us to take advantage of cached Docker layers. 
COPY ["package.json", "package-lock.json*", "./"]


# execute the command npm install 
# works exactly the same as if we were running npm install locally on our machine
RUN npm install --production


# Add our source code into the image
COPY . .

#  Command that runs the image
CMD [ "node", "server.js" ]
