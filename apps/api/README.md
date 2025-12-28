# PPA Pricing API

This FastAPI service provides endpoints for pricing power purchase agreements. It is managed with [uv](https://github.com/astral-sh/uv), uses Ruff for linting, and pytest for tests.

## Local development

```bash
cd apps/api
uv sync --dev
uv run uvicorn api.main:app --reload
```

Run linting and tests:

```bash
uv run ruff check .
uv run pytest
```
