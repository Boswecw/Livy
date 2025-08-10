from pydantic import BaseModel


class RootResponse(BaseModel):
    status: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str


class SecureResponse(BaseModel):
    user: str


class UploadURLResponse(BaseModel):
    url: str
