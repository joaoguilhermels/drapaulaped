.PHONY: help install dev build lint clean up down restart logs

# Help command
help:
	@echo "Available commands:"
	@echo "  make install    - Install dependencies via Docker"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build for production"
	@echo "  make lint       - Run ESLint"
	@echo "  make up         - Start Docker containers"
	@echo "  make down       - Stop Docker containers"
	@echo "  make restart    - Restart Docker containers"
	@echo "  make logs       - Show container logs"
	@echo "  make clean      - Clean build artifacts"

# Install dependencies
install:
	docker-compose run --rm nextjs npm install

# Start development server
dev:
	docker-compose up

# Build for production
build:
	docker-compose run --rm nextjs npm run build

# Run linter
lint:
	docker-compose run --rm nextjs npm run lint

# Start containers in background
up:
	docker-compose up -d

# Stop containers
down:
	docker-compose down

# Restart containers
restart:
	docker-compose restart

# Show logs
logs:
	docker-compose logs -f

# Clean build artifacts
clean:
	docker-compose run --rm nextjs rm -rf .next out
	docker-compose down -v
