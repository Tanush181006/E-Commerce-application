import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import { getProducts } from "../api/productApi";

const CategoryPage = ({
  title,
  categoryId,
  cartCount,
  onAddToCart,
  isLoggedIn,
  setIsLoggedIn,
}) => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts(categoryId);
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900">

      <Navbar
        cartCount={cartCount}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div className="flex flex-col items-center gap-8 py-8">

        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-96 px-4 py-3 rounded-lg border border-gray-300 text-white"
        />

        <h1 className="text-5xl font-bold text-blue-500">
          {title}
        </h1>

        {loading ? (
          <h2 className="text-white text-2xl">
            Loading...
          </h2>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">

            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  isLoggedIn={isLoggedIn}
                />
              ))
            ) : (
              <h2 className="text-white text-2xl">
                No products found.
              </h2>
            )}

          </div>
        )}

      </div>

    </div>
  );
};

export default CategoryPage;