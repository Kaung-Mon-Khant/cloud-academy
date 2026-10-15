.PHONY: setup dev up down logs reset test

setup: ## Install deps, start DB, migrate and seed
	cp -n .env.example .env || true
	npm install
	npm run db:up
	npm run db:migrate
	npm run db:seed

dev: ## Run API + Web in watch mode
	npm run dev

up: ## Build and run the full stack in Docker
	docker compose up -d --build

down:
	docker compose down

logs:
	docker compose logs -f --tail=100

reset: ## Drop and re-seed the database
	npm run db:reset

test:
	npm test
