from sqlalchemy.orm import Session
from app import models


def create_product(db: Session, product):
    db_product = models.Product(
        name=product.name,
        price=product.price
    )

    db.add(db_product)
    db.commit()
    db.refresh(db_product)

    return db_product