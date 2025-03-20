#################################
# Build command: docker build --build-arg NODE_VERSION=$(cat .nvmrc) -t <image_name> .
#################################

# Stage 1: Build React App
# Default to Node 18 if .nvmrc is not provided
ARG NODE_VERSION=18
FROM node:${NODE_VERSION} AS build

# Create app directory
WORKDIR /usr/src/app

# Copy source codes
COPY . /usr/src/app

# Install app dependencies
RUN npm install

# Build React app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

# Starts Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]