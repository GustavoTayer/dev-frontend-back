# Base image
FROM --platform=linux/amd64 node:18-alpine

# Create app directory
WORKDIR /usr/src/app

RUN apk add g++ make py3-pip


# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./


# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/src/main.js" ]
