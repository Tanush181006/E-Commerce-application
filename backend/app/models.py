from sqlalchemy import Column, Integer, String, Float
from app.database import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100), nullable=False)

    description = Column(String(500), nullable=False)

    category = Column(String(50), nullable=False)

    image = Column(String(500), nullable=False)

    price = Column(Float, nullable=False)

    stock = Column(Integer, nullable=False)
from sqlalchemy import Boolean

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String(100), nullable=False)

    email = Column(String(100), unique=True, nullable=False)

    password = Column(String(255), nullable=False)

    is_admin = Column(Boolean, default=False)    