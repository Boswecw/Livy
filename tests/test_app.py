import os
import sys

from fastapi.testclient import TestClient

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from backend.main import app
from backend.schemas import (
    RootResponse,
    SecureResponse,
    TokenResponse,
    UploadURLResponse,
)

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    data = RootResponse.model_validate(response.json())
    assert data.status == "ok"

def test_token_auth_flow():
    response = client.post("/token", data={"username": "alice", "password": "secret"})
    assert response.status_code == 200
    token = TokenResponse.model_validate(response.json()).access_token

    secure = client.get("/secure", headers={"Authorization": f"Bearer {token}"})
    assert secure.status_code == 200
    user_data = SecureResponse.model_validate(secure.json())
    assert user_data.user == "alice"


def test_upload_url_valid_filename(monkeypatch):
    monkeypatch.setattr(
        "backend.main.get_presigned_url", lambda key: "http://example.com/upload"
    )
    response = client.get("/upload-url", params={"filename": "good.txt"})
    assert response.status_code == 200
    upload_data = UploadURLResponse.model_validate(response.json())
    assert upload_data.url == "http://example.com/upload"


def test_upload_url_invalid_filename():
    response = client.get("/upload-url", params={"filename": "../bad.txt"})
    assert response.status_code == 400
