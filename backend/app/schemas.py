from pydantic import BaseModel
from datetime import datetime
class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
    stock: int
    image_url: str
    category_id: int
    brand: str
class ProductUpdate(BaseModel):
    name: str
    description: str
    price: float
    stock: int
    image_url: str
    category_id: int
    brand: str

class ProductResponse(BaseModel):
    id: int
    name: str
    description: str
    price: float
    stock: int
    image_url: str
    category_id: int
    brand: str

    class Config:
        from_attributes = True

class CategoryCreate(BaseModel):
    name: str
    slug: str
    description: str | None = None
    image_url: str | None = None

class CategoryUpdate(BaseModel):
    name: str
    slug: str
    description: str | None = None
    image_url: str | None = None


class CategoryResponse(BaseModel):
    id: int
    name: str
    slug: str
    description: str | None = None
    image_url: str | None = None

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


class OrderItemCreate(BaseModel):
    product_id: int
    quantity: int

class OrderCreate(BaseModel):
    items: list[OrderItemCreate]

class OrderItemResponse(BaseModel):
    product_id: int
    quantity: int
    price: float

    class Config:
        from_attributes = True

class OrderResponse(BaseModel):
    id: int
    user_id: int
    total_amount: float
    status: str
    created_at: datetime
    order_items: list[OrderItemResponse]

    class Config:
        from_attributes = True

class OrderStatusUpdate(BaseModel):
    status: str


class OrderStatusResponse(BaseModel):
    id: int
    status: str

    class Config:
        from_attributes = True