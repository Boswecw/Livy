from fastapi.testclient import TestClient

from backend.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_token_auth_flow():
    response = client.post("/token", json={"username": "alice", "password": "secret"})
    assert response.status_code == 200
    token = response.json()["access_token"]

    secure = client.get("/secure", headers={"Authorization": f"Bearer {token}"})
    assert secure.status_code == 200
    assert secure.json() == {"user": "alice"}


def test_login_invalid_credentials():
    response = client.post("/token", json={"username": "alice", "password": "wrong"})
    assert response.status_code == 400
