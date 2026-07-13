from fastapi import FastAPI
from app.database import engine, Base
from app import models
from app.routers import products, users

app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"message": "Welcome to the E-Commerce Backend"}

app.include_router(products.router)
app.include_router(users.router)

