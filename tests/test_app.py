from fastapi.testclient import TestClient

import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from backend.main import app, users_db
from passlib.hash import bcrypt

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_token_auth_flow():
    # Ensure the stored password is bcrypt-hashed
    assert bcrypt.verify("secret", users_db["alice"])
    response = client.post("/token", data={"username": "alice", "password": "secret"})
    assert response.status_code == 200
    token = response.json()["access_token"]

    secure = client.get("/secure", headers={"Authorization": f"Bearer {token}"})
    assert secure.status_code == 200
    assert secure.json() == {"user": "alice"}


def test_upload_url_valid_filename(monkeypatch):
    monkeypatch.setattr(
        "backend.main.get_presigned_url", lambda key: "http://example.com/upload"
    )
    response = client.get("/upload-url", params={"filename": "good.txt"})
    assert response.status_code == 200
    assert response.json()["url"] == "http://example.com/upload"


def test_upload_url_invalid_filename():
    response = client.get("/upload-url", params={"filename": "../bad.txt"})
    assert response.status_code == 400
