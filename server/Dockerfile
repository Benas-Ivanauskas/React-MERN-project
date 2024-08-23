# Use an official Node.js runtime (Alpine version)
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install build dependencies (necessary for bcrypt and other native modules)
RUN apk add --no-cache make gcc g++ python3

# Install node dependencies inside the container
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Rebuild native dependencies, such as bcrypt, inside the container
RUN npm rebuild bcrypt --build-from-source

# Remove build dependencies to keep the image size small
RUN apk del make gcc g++ python3

# Expose the port the app runs on
EXPOSE 4000

# Command to run the application
CMD ["npm", "start"]
