from typing import Annotated

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi import HTTPException
from app import crud, schemas
from app.core.security import (
    get_current_user,
    get_current_admin,
    get_db,
)
router = APIRouter(
    prefix="/orders",
    tags=["Orders"],
)


@router.post(
    "/",
    response_model=schemas.OrderResponse,
)
def place_order(
    order: schemas.OrderCreate,
    db: Annotated[Session, Depends(get_db)],
    current_user=Depends(get_current_user),
):
    return crud.create_order(
        db,
        current_user,
        order,
    )

@router.get(
    "/me",
    response_model=list[schemas.OrderResponse],
)
def get_my_orders(
    db: Annotated[Session, Depends(get_db)],
    current_user=Depends(get_current_user),
):
    return crud.get_orders_by_user(
        db,
        current_user.id,
    )

@router.get(
    "/{order_id}",
    response_model=schemas.OrderResponse,
)
def get_order(
    order_id: int,
    db: Annotated[Session, Depends(get_db)],
    current_user=Depends(get_current_user),
):
    order = crud.get_order_by_id(
        db,
        order_id,
    )

    if not order:
        raise HTTPException(
            status_code=404,
            detail="Order not found",
        )

    if order.user_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="Not authorized to view this order",
        )

    return order

@router.get(
    "/admin/all",
    response_model=list[schemas.OrderResponse],
)
def get_all_orders(
    db: Annotated[Session, Depends(get_db)],
    current_admin=Depends(get_current_admin),
):
    return crud.get_all_orders(db)

@router.put(
    "/admin/{order_id}",
    response_model=schemas.OrderStatusResponse,
)
def update_order_status(
    order_id: int,
    order_status: schemas.OrderStatusUpdate,
    db: Annotated[Session, Depends(get_db)],
    current_admin=Depends(get_current_admin),
):
    order = crud.update_order_status(
        db,
        order_id,
        order_status.status,
    )

    if not order:
        raise HTTPException(
            status_code=404,
            detail="Order not found",
        )

    return order