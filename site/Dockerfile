FROM node:18-alpine

WORKDIR /app

# Enable Corepack for Yarn 3.6.0
RUN corepack enable

# Copy package files
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

EXPOSE 3000

# Start the development server
CMD ["npm", "start"]