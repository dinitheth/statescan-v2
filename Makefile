.PHONY: help dev build stop clean logs

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

dev: ## Start all services for development
	@echo "Starting Statescan development environment..."
	docker compose up --build

build: ## Build all Docker images
	@echo "Building all services..."
	docker compose build

stop: ## Stop all services
	@echo "Stopping all services..."
	docker compose down

clean: ## Stop services and remove volumes
	@echo "Cleaning up all containers and volumes..."
	docker compose down -v --remove-orphans
	docker system prune -f

logs: ## Show logs from all services
	docker compose logs -f

logs-api: ## Show API server logs
	docker compose logs -f api-server

logs-frontend: ## Show frontend logs
	docker compose logs -f frontend

logs-scanner: ## Show block scanner logs
	docker compose logs -f block-scan