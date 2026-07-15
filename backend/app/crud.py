from fastapi import HTTPException
from sqlalchemy.orm import Session, joinedload

from app import models
from app.schemas import (
    ProductCreate,
    ProductUpdate,
    UserCreate,
    OrderCreate,
    CategoryCreate
)
from app.core.security import (
    hash_password,
    verify_password,
)

def create_product(db: Session, product: ProductCreate):

    db_product = models.Product(
        name=product.name,
        description=product.description,
        price=product.price,
        stock=product.stock,
        image_url=product.image_url,
        category_id=product.category_id,
        brand=product.brand,
    )

    db.add(db_product)
    db.commit()
    db.refresh(db_product)

    return db_product


def get_products(
    db: Session,
    category_id: int | None = None,
):
    query = db.query(models.Product)

    if category_id is not None:
        query = query.filter(
            models.Product.category_id == category_id
        )

    return query.all()


def get_product(db: Session, product_id: int):
    return (
        db.query(models.Product)
        .filter(models.Product.id == product_id)
        .first()
    )


def update_product(
    db: Session,
    product_id: int,
    product: ProductUpdate,
):

    db_product = get_product(db, product_id)

    if not db_product:
        return None

    db_product.name = product.name
    db_product.description = product.description
    db_product.price = product.price
    db_product.stock = product.stock
    db_product.image_url = product.image_url
    db_product.category_id=product.category_id
    db_product.brand = product.brand

    db.commit()
    db.refresh(db_product)

    return db_product


def delete_product(
    db: Session,
    product_id: int,
):

    db_product = get_product(db, product_id)

    if not db_product:
        return None

    db.delete(db_product)
    db.commit()

    return db_product


def get_product_by_id(
    db: Session,
    product_id: int,
):
    return (
        db.query(models.Product)
        .filter(models.Product.id == product_id)
        .first()
    )


def create_user(
    db: Session,
    user: UserCreate,
):

    db_user = models.User(
        full_name=user.full_name,
        email=user.email,
        password=hash_password(user.password),
        is_admin=False,
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


def get_user_by_email(
    db: Session,
    email: str,
):
    return (
        db.query(models.User)
        .filter(models.User.email == email)
        .first()
    )


def authenticate_user(
    db: Session,
    email: str,
    password: str,
):

    user = get_user_by_email(db, email)

    if not user:
        return False

    if not verify_password(
        password,
        user.password,
    ):
        return False

    return user

def create_order(
    db: Session,
    current_user: models.User,
    order: OrderCreate,
):

    total_amount = 0

    order_items = []

    for item in order.items:

        product = get_product_by_id(
            db,
            item.product_id,
        )

        if not product:
            raise HTTPException(
                status_code=404,
                detail=f"Product {item.product_id} not found",
            )

        if product.stock < item.quantity:
            raise HTTPException(
                status_code=400,
                detail=f"Not enough stock for {product.name}",
            )

        subtotal = product.price * item.quantity

        total_amount += subtotal

        order_items.append(

            models.OrderItem(
                product_id=product.id,
                quantity=item.quantity,
                price=product.price,
            )

        )

        product.stock -= item.quantity

    db_order = models.Order(
        user_id=current_user.id,
        total_amount=total_amount,
        status="Pending",
    )

    db.add(db_order)
    db.flush()

    for item in order_items:
        item.order_id = db_order.id
        db.add(item)

    db.commit()

    db.refresh(db_order)

    return db_order

def get_orders_by_user(
    db: Session,
    user_id: int,
):
    return (
        db.query(models.Order)
        .options(
            joinedload(models.Order.order_items)
            .joinedload(models.OrderItem.product)
        )
        .filter(models.Order.user_id == user_id)
        .all()
    )

def get_order_by_id(
    db: Session,
    order_id: int,
):
    return (
        db.query(models.Order)
        .options(
            joinedload(models.Order.order_items)
            .joinedload(models.OrderItem.product)
        )
        .filter(models.Order.id == order_id)
        .first()
    )

def get_all_orders(db: Session):
    return (
        db.query(models.Order)
        .all()
    )

def update_order_status(
    db: Session,
    order_id: int,
    status: str,
):
    order = (
        db.query(models.Order)
        .filter(models.Order.id == order_id)
        .first()
    )

    if not order:
        return None

    order.status = status

    db.commit()
    db.refresh(order)

    return order

def create_category(
    db: Session,
    category: CategoryCreate,
):

    db_category = models.Category(
        name=category.name,
        slug=category.slug,
        description=category.description,
        image_url=category.image_url,
    )

    db.add(db_category)
    db.commit()
    db.refresh(db_category)

    return db_category

def get_categories(db: Session):
    return db.query(models.Category).all()

def get_category(
    db: Session,
    category_id: int,
):
    return (
        db.query(models.Category)
        .filter(models.Category.id == category_id)
        .first()
    )