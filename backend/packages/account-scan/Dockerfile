# Build stage
FROM node:18-alpine AS builder

# Enable Corepack for Yarn 3.6.x
RUN corepack enable

WORKDIR /app

# Copy the entire monorepo structure
COPY . .

# Install dependencies from the backend workspace
RUN cd backend && yarn install

# Production stage
FROM node:18-alpine

# Enable Corepack in production too
RUN corepack enable

WORKDIR /app

# Copy the workspace and dependencies
COPY --from=builder /app/backend /app/backend

# Set working directory to this specific package
WORKDIR /app/backend/packages/account-scan

# Start the scanner
CMD ["node", "src/index.js"]