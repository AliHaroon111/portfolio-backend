# 1. Use an official, lightweight Node.js runtime as a parent image
FROM node:24-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package tracking files first (optimization step)
COPY package*.json ./

# 4. Install only production dependencies to keep the image small
RUN npm ci --only=production

# 5. Copy the rest of your local backend application source code
COPY . .

# 6. Inform Docker that the container listens on port 5000 at runtime
EXPOSE 5000

# 7. Define the runtime execution command to spin up your server
CMD ["node", "src/server.js"]