from pydantic import BaseModel

class ProductCreate(BaseModel):
    name: str
    description: str
    category: str
    image: str
    price: float
    stock: int
class ProductUpdate(BaseModel):
    name: str
    description: str
    category: str
    image: str
    price: float
    stock: int

class ProductResponse(ProductCreate):
    id: int

    class Config:
        from_attributes = True
    
    
class UserCreate(BaseModel):
    full_name: str
    email: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: str
    is_admin: bool

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None