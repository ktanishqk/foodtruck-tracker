# Use the official Node.js image as the base image
FROM node:14 AS frontend

# Set working directory in the container
WORKDIR /takehome_app/frontend

# Copy the frontend files into the container
COPY . .

# Install dependencies
RUN npm install

# Build the frontend
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the frontend server
CMD ["npm", "start"]
