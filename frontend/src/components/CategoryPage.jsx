import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const CategoryPage = ({title, products, cartCount, onAddToCart, isLoggedIn, setIsLoggedIn }) => {

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900">

      <Navbar cartCount={cartCount}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn} />

      <div className="flex flex-col items-center gap-8 py-8">

        <div className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-96 px-4 py-3 rounded-lg border border-gray-300 text-white focus:outline-none"
          />
        </div>

        <h1 className="text-5xl font-bold text-blue-500">
          {title}
        </h1>

        <div className="flex flex-wrap justify-center gap-6">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))
          ) : (
            <h2 className="text-white text-2xl">
              No products found.
            </h2>
          )}

        </div>

      </div>

    </div>
  );
};

export default CategoryPage;