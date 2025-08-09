from sqlalchemy import Column, Integer, String
from pgvector.sqlalchemy import Vector

from .database import Base

class Document(Base):
    __tablename__ = "documents"
    id = Column(Integer, primary_key=True, index=True)
    content = Column(String)
    embedding = Column(Vector(1536))
