# Use Node.js image for building
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY . .

# Build the application
RUN npm run build

# Use production-ready server for final image
FROM node:18-alpine AS production

WORKDIR /app

# Copy package files again
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Install serve to host static files
RUN npm install -g serve

# Expose the correct port (Vite default is 4173 for preview, 5173 for dev)
EXPOSE 4173

# Command to serve the built files
CMD ["serve", "-s", "dist", "-l", "4173"]