from fastapi.testclient import TestClient

from api.main import app

client = TestClient(app)


def test_health_check() -> None:
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_quote_endpoint() -> None:
    response = client.get("/quote")
    assert response.status_code == 200
    body = response.json()
    assert "price" in body
    assert isinstance(body["price"], (int, float))
