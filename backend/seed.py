from app.database import SessionLocal
from app import models

db = SessionLocal()
categories = [
    {
        "name": "Shoes",
        "slug": "shoes",
        "description": "All types of shoes",
        "image_url": "shoes.jpg",
    },
    {
        "name": "Electronics",
        "slug": "electronics",
        "description": "Electronic gadgets",
        "image_url": "electronics.jpg",
    },
    {
        "name": "Watches",
        "slug": "watches",
        "description": "Smart and analog watches",
        "image_url": "watches.jpg",
    },
]
for category in categories:

    existing = (
        db.query(models.Category)
        .filter(models.Category.name == category["name"])
        .first()
    )

    if not existing:
        db.add(models.Category(**category))

db.commit()

products = [
    {
        "name": "Nike Air Max",
        "description": "Comfortable running shoes",
        "price": 8999,
        "stock": 20,
        "image_url": "nike-air-max.jpg",
        "brand": "Nike",
        "category_id": 1,
    },
    {
        "name": "Adidas Superstar",
        "description": "Classic white sneakers",
        "price": 7499,
        "stock": 15,
        "image_url": "adidas-superstar.jpg",
        "brand": "Adidas",
        "category_id": 1,
    },
    {
        "name": "Puma RS-X",
        "description": "Chunky lifestyle shoes",
        "price": 6999,
        "stock": 12,
        "image_url": "puma-rsx.jpg",
        "brand": "Puma",
        "category_id": 1,
    },
    {
        "name": "New Balance 574",
        "description": "Everyday casual sneakers",
        "price": 7999,
        "stock": 18,
        "image_url": "newbalance574.jpg",
        "brand": "New Balance",
        "category_id": 1,
    },
    {
        "name": "MacBook Air M2",
        "description": "Apple laptop",
        "price": 99999,
        "stock": 10,
        "image_url": "macbook-air.jpg",
        "brand": "Apple",
        "category_id": 7,
    },
    {
        "name": "iPhone 16",
        "description": "Apple smartphone",
        "price": 79999,
        "stock": 15,
        "image_url": "iphone16.jpg",
        "brand": "Apple",
        "category_id": 7,
    },
    {
        "name": "Samsung Galaxy S25",
        "description": "Samsung flagship smartphone",
        "price": 74999,
        "stock": 14,
        "image_url": "galaxy-s25.jpg",
        "brand": "Samsung",
        "category_id": 7,
    },
    {
        "name": "Apple Watch Series 10",
        "description": "Apple smartwatch",
        "price": 45999,
        "stock": 8,
        "image_url": "apple-watch.jpg",
        "brand": "Apple",
        "category_id": 8,
    }
]

for product in products:

    existing = (
        db.query(models.Product)
        .filter(models.Product.name == product["name"])
        .first()
    )

    if not existing:
        db.add(models.Product(**product))

db.commit()

print("Database seeded successfully!")