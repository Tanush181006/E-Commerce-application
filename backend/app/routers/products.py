from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import Optional
from fastapi import Query

from app import crud
from app.schemas import (
    ProductCreate,
    ProductUpdate,
    ProductResponse,
)
from app.core.security import (
    get_db,
    get_current_admin,
)

router = APIRouter(
    tags=["Products"]
)


@router.post(
    "/products",
    response_model=ProductResponse,
)
def create_product(
    product: ProductCreate,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    return crud.create_product(db, product)


@router.get(
    "/products",
    response_model=list[ProductResponse],
)
def get_products(
    category_id: Optional[int] = Query(None),
    db: Session = Depends(get_db),
):
    return crud.get_products(
        db,
        category_id,
    )


@router.get(
    "/products/{product_id}",
    response_model=ProductResponse,
)
def get_product(
    product_id: int,
    db: Session = Depends(get_db),
):
    return crud.get_product(db, product_id)


@router.put(
    "/products/{product_id}",
    response_model=ProductResponse,
)
def update_product(
    product_id: int,
    product: ProductUpdate,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    return crud.update_product(
        db,
        product_id,
        product,
    )


@router.delete("/products/{product_id}")
def delete_product(
    product_id: int,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    product = crud.delete_product(
        db,
        product_id,
    )

    if product is None:
        return {
            "message": "Product not found"
        }

    return {
        "message": "Product deleted successfully"
    }