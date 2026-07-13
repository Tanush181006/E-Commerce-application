from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas import ProductCreate, ProductResponse, ProductUpdate
from app import crud
from app.core.security import get_current_admin
router = APIRouter()


@router.post("/products")
def create_product(
    product: schemas.ProductCreate,
    db: Session = Depends(get_db),
    current_admin = Depends(get_current_admin),
):
    return crud.create_product(db, product)
@router.get("/products", response_model=list[ProductResponse])
def get_products(db: Session = Depends(get_db)):
    return crud.get_products(db)
@router.get("/products/{product_id}", response_model=ProductResponse)
def get_product(product_id: int, db: Session = Depends(get_db)):
    return crud.get_product(db, product_id)
@router.put("/products/{product_id}")
def update_product(
    product_id: int,
    product: schemas.ProductUpdate,
    db: Session = Depends(get_db),
    current_admin = Depends(get_current_admin),
):
    return crud.update_product(db, product_id, product)
@router.delete("/products/{product_id}")
def delete_product(
    product_id: int,
    db: Session = Depends(get_db),
    current_admin = Depends(get_current_admin),
):
    product = crud.delete_product(db, product_id)

    if product is None:
        return {"message": "Product not found"}

    return {"message": "Product deleted successfully"}