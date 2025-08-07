# Local Development Environment Setup for Statescan-v2

## Quick Start with Docker (Recommended)

### Prerequisites

- **Docker & Docker Compose:** Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Setup Steps

1. **Clone and navigate to the project:**

   ```bash
   git clone <repository-url>
   cd statescan-v2
   ```

2. **Start the entire stack:**

   ```bash
   make dev
   # or alternatively: docker-compose up --build
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - REST API: http://localhost:5010
   - GraphQL API: http://localhost:4000

### Available Commands

```bash
make dev      # Start all services
make stop     # Stop all services
make clean    # Stop and remove all data
make logs     # View all logs
make build    # Build all images
```

---

## Manual Setup (Alternative)

If you prefer not to use Docker, follow the original setup process:

### Prerequisites

- **MongoDB:** Ensure MongoDB is installed and running on your system.
- **Node.js:** Version 18 or higher.
- **npm:** Node Package Manager (comes with Node.js).
- **PM2:** A production process manager for Node.js applications. Install globally:
  ```bash
  npm install -g pm2
  ```

### Setup Steps

1.  **Configure Environment Variables:**
    For each package that has an `.env.example` file, copy it to `.env` in the same directory and configure the variables as needed for your local setup.

    Example for `block-scan`:

    ```bash
    cp backend/packages/block-scan/.env.example backend/packages/block-scan/.env
    ```

    Repeat this for `backend/packages/server`, `backend/packages/graphql-server`, `site`, and any other `*-scan` packages you intend to use.

2.  **Run Data Indexing Scripts (Backend Scanners):**
    These scripts populate your MongoDB database with blockchain data. You'll need to run them for the data you want to display.

    - **Example for `block-scan`:**
      Navigate to the `block-scan` directory:
      ```bash
      cd backend/packages/block-scan
      ```
      Run the indexing script using PM2:
      ```bash
      NODE_ENV=production pm2 start src/index.js --name prod-statescan-v2-polkadot-block-scan-prod --log-date-format 'YYYY-MM-DD HH:mm Z' --env production
      ```
    - **Other Scanners:** Repeat this process for other `*-scan` packages (e.g., `account-scan`, `asset-scan`, etc.) by checking their respective `deploy.sh.example` files for the exact `pm2` commands.

3.  **Start Backend Servers:**

    - **RESTful Server:**
      Navigate to the `server` directory:
      ```bash
      cd backend/packages/server
      ```
      Start the server:
      ```bash
      npm run dev
      ```
    - **GraphQL Server:**
      Navigate to the `graphql-server` directory:
      ```bash
      cd backend/packages/graphql-server
      ```
      Start the server:
      ```bash
      npm run dev
      ```

4.  **Start Frontend Application:**
    Navigate to the `site` directory:
    ```bash
    cd site
    ```
    Start the React development server:
    ```bash
    npm start
    ```
    The application should open in your browser, typically at `http://localhost:3000`.
