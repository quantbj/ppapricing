from fastapi import FastAPI

app = FastAPI(title="PPA Pricing API", version="0.1.0")


@app.get("/health", tags=["health"])
def health_check() -> dict[str, str]:
    """Simple readiness check."""
    return {"status": "ok"}


@app.get("/quote", tags=["quotes"])
def quote_example() -> dict[str, float]:
    """Placeholder endpoint for pricing quotes."""
    return {"price": 0.0}
