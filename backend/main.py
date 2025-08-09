# backend/main.py

from hashlib import sha256

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .database import init_db
from .auth import OAuth2PasswordRequestForm, create_access_token

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


@app.on_event("startup")
def on_startup() -> None:
    init_db()


@app.get("/")
def read_root():
    return {"status": "ok"}


@app.post("/token")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    """Authenticate user and issue an access token."""
    hashed_pw = sha256(form_data.password.encode()).hexdigest()
    if users_db.get(form_data.username) != hashed_pw:
        raise HTTPException(status_code=400, detail="Invalid username or password")

    access_token = create_access_token({"sub": form_data.username})
    return {"access_token": access_token, "token_type": "bearer"}
