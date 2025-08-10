# tests/test_api.py
import os
import sys

os.environ.setdefault("SECRET_KEY", "test-secret")

from fastapi.testclient import TestClient
from passlib.hash import bcrypt
import pytest

# Make "backend" importable when running `pytest` from repo root
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

# App + dependencies
from backend.main import app, users_db  # type: ignore

# Pydantic response models
from backend.schemas import (  # type: ignore
    RootResponse,
    SecureResponse,
    TokenResponse,
    UploadURLResponse,
)

client = TestClient(app)


def test_root():
    resp = client.get("/")
    assert resp.status_code == 200
    data = RootResponse.model_validate(resp.json())
    assert data.status == "ok"


def test_token_auth_flow():
    # Ensure the stored password is bcrypt-hashed (and matches "secret")
    assert "alice" in users_db, "Expected 'alice' to exist in users_db"
    assert bcrypt.verify("secret", users_db["alice"])

    # Acquire token
    resp = client.post("/token", data={"username": "alice", "password": "secret"})
    assert resp.status_code == 200
    token = TokenResponse.model_validate(resp.json()).access_token

    # Hit secure endpoint
    secure = client.get("/secure", headers={"Authorization": f"Bearer {token}"})
    assert secure.status_code == 200
    user_data = SecureResponse.model_validate(secure.json())
    assert user_data.user == "alice"


def test_upload_url_valid_filename(monkeypatch):
    # Patch the presigned URL helper in backend.main
    monkeypatch.setattr("backend.main.get_presigned_url", lambda key: "http://example.com/upload")
    resp = client.get("/upload-url", params={"filename": "good.txt"})
    assert resp.status_code == 200
    upload_data = UploadURLResponse.model_validate(resp.json())
    assert upload_data.url == "http://example.com/upload"


def test_upload_url_invalid_filename():
    resp = client.get("/upload-url", params={"filename": "../bad.txt"})
    assert resp.status_code == 400


def test_missing_secret_key(monkeypatch):
    import importlib
    import backend.auth as auth

    monkeypatch.delenv("SECRET_KEY", raising=False)
    with pytest.raises(RuntimeError):
        importlib.reload(auth)
