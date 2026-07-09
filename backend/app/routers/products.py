from fastapi import APIRouter

router = APIRouter()

products = [
    {
        "id": 1,
        "name": "Nike Air Max",
        "price": 4999
    },
    {
        "id": 2,
        "name": "MacBook Air",
        "price": 99999
    }
]


@router.get("/products")
def get_products():
    return products


@router.post("/products")
def add_product(product: dict):
    products.append(product)
    return {
        "message": "Product added successfully",
        "product": product
    }