from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, Base
from app import models
from app.routers import products, users, orders, categories
from fastapi.staticfiles import StaticFiles
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"message": "Welcome to ZenMart Backend"}

app.include_router(products.router)
app.include_router(users.router)
app.include_router(orders.router)
app.include_router(categories.router)
app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static",
)