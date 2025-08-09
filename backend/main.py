from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .database import get_db, init_db
from .auth import OAuth2PasswordRequestForm, create_access_token, get_current_user
from .storage import get_presigned_url
from .rag import rag_query

app = FastAPI(title="Livy Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://example.com"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup() -> None:
    init_db()

@app.get("/")
def read_root():
    return {"status": "ok"}

@app.post("/token")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    access_token = create_access_token({"sub": form_data.username})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/secure")
def secure(current_user: str = Depends(get_current_user)):
    return {"user": current_user}

@app.post("/upload-url")
def upload_url(filename: str):
    return {"url": get_presigned_url(filename)}

@app.post("/rag")
def rag(query: str, db: Session = Depends(get_db)):
    return {"answer": rag_query(db, query)}
