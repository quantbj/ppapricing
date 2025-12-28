SHELL := /bin/bash

.PHONY: dev lint test api-lint web-lint api-test web-test

# Start the full stack with Docker
dev:
	docker compose up --build

# Run linters for all projects
lint: api-lint web-lint

# Run tests for all projects
test: api-test web-test

api-lint:
	cd apps/api && uv run ruff check .

web-lint:
	pnpm lint

api-test:
	cd apps/api && uv run pytest

web-test:
	pnpm test
