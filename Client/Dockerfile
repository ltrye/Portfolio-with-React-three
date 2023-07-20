#build stage
FROM node:latest as build

# Set the working directory for the client app
WORKDIR /app

# Copy the package.json and package-lock.json first
# This way, the dependencies will be cached unless they change
COPY package*.json ./

# Install client app dependencies
RUN npm install

# Copy the rest of the client app files
COPY . .

# Build the client app for production
RUN npm run build

# Stage 2: Use the lightweight Nginx image for serving the built app
FROM nginx:alpine

# Copy the built client app from the previous stage (build)
COPY --from=build /dist /usr/share/nginx/html

# Expose port 3000 for the client
EXPOSE 3000

# Start Nginx to serve the client app
CMD ["nginx", "-g", "daemon off;"]