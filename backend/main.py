# backend/main.py

from hashlib import sha256
import os
import re

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .database import init_db
from .auth import (
    OAuth2PasswordRequestForm,
    create_access_token,
    get_current_user,
)
from .storage import get_presigned_url
from .schemas import (
    RootResponse,
    SecureResponse,
    TokenResponse,
    UploadURLResponse,
)

app = FastAPI(title="Livy Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://example.com"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory user store with hashed passwords for demo purposes
users_db = {
    "alice": sha256("secret".encode()).hexdigest(),
}

# Whitelisted extensions for uploads
ALLOWED_EXTENSIONS = {".txt", ".pdf", ".png", ".jpg", ".jpeg"}


@app.on_event("startup")
def on_startup() -> None:
    init_db()


@app.get("/")
def read_root() -> RootResponse:
    return RootResponse(status="ok")


@app.post("/token")
def login(form_data: OAuth2PasswordRequestForm = Depends()) -> TokenResponse:
    """Authenticate user and issue an access token."""
    hashed_pw = sha256(form_data.password.encode()).hexdigest()
    if users_db.get(form_data.username) != hashed_pw:
        raise HTTPException(status_code=400, detail="Invalid username or password")

    access_token = create_access_token({"sub": form_data.username})
    return TokenResponse(access_token=access_token, token_type="bearer")


@app.get("/secure")
def secure(current_user: str = Depends(get_current_user)) -> SecureResponse:
    """Protected route used for testing token authentication."""
    return SecureResponse(user=current_user)


@app.get("/upload-url")
def upload_url(filename: str) -> UploadURLResponse:
    """Return a presigned S3 URL for uploading a file.

    The provided ``filename`` must only contain alphanumeric characters, dashes,
    underscores, and periods.  Additionally, the file extension must be part of
    ``ALLOWED_EXTENSIONS``.  Invalid filenames result in ``HTTPException`` with a
    ``400`` status code.
    """

    if not re.fullmatch(r"[\w.-]+", filename):
        raise HTTPException(status_code=400, detail="Invalid filename")

    ext = os.path.splitext(filename)[1].lower()
    if ALLOWED_EXTENSIONS and ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(status_code=400, detail="Invalid file extension")

    url = get_presigned_url(f"uploads/{filename}")
    return UploadURLResponse(url=url)
