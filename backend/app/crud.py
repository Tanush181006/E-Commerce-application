from sqlalchemy.orm import Session
from app import models
from app.schemas import ProductCreate
from app.schemas import ProductUpdate
from app.schemas import UserCreate
from app.schemas import UserLogin
from app.core.security import hash_password
def create_product(db: Session, product: ProductCreate):
    db_product = models.Product(
        name=product.name,
        description=product.description,
        category=product.category,
        image=product.image,
        price=product.price,
        stock=product.stock
    )

    db.add(db_product)
    db.commit()
    db.refresh(db_product)

    return db_product
def get_products(db: Session):
    return db.query(models.Product).all()
def get_product(db: Session, product_id: int):
    return db.query(models.Product).filter(
        models.Product.id == product_id
    ).first()
def update_product(db: Session, product_id: int, product: ProductUpdate):

    db_product = db.query(models.Product).filter(
        models.Product.id == product_id
    ).first()

    if not db_product:
        return None

    db_product.name = product.name
    db_product.description = product.description
    db_product.category = product.category
    db_product.image = product.image
    db_product.price = product.price
    db_product.stock = product.stock

    db.commit()
    db.refresh(db_product)

    return db_product
def delete_product(db: Session, product_id: int):

    db_product = db.query(models.Product).filter(
        models.Product.id == product_id
    ).first()

    if not db_product:
        return None

    db.delete(db_product)
    db.commit()

    return db_product

def create_user(db: Session, user: UserCreate):
    

    db_user = models.User(
        full_name=user.full_name,
        email=user.email,
        password=hash_password(user.password),
        is_admin=False
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user
def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(
        models.User.email == email
    ).first()

from app.core.security import verify_password


def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)

    if not user:
        return False

    if not verify_password(password, user.password):
        return False

    return user