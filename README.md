# ppapricing

Monorepo for the PPA pricing platform with a FastAPI backend and Next.js frontend. Tooling is organized with PNPM workspaces, Turborepo, and uv for Python package management.

## Project layout

- `apps/api`: FastAPI service, managed with uv, linted by Ruff, tested with pytest.
- `apps/web`: Next.js frontend, linted with ESLint, tested with Vitest.
- `docker-compose.yml`: Runs Postgres, API, and web app together.
- `.github/workflows/ci.yml`: CI job that runs linting and tests for both stacks.
- `Makefile`: Common developer commands.

## Getting started

Install dependencies (requires internet access):

```bash
# JavaScript
pnpm install

# Python
cd apps/api
uv sync --dev
```

## Development scripts

```bash
make dev   # starts docker-compose with db, api, and web
make lint  # runs Ruff and ESLint via pnpm
make test  # runs pytest and Vitest
```

Use `pnpm dev` to run Turbo-powered web tasks locally without Docker. Use `uv run uvicorn api.main:app --reload` inside `apps/api` for API-only development.
