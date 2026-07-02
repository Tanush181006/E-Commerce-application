import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";


  const Home = ({ cartCount, onAddToCart }) => {
    const [search, setSearch] = useState("");
    const filteredProducts = products.filter((product) =>
  product.name
    .toLowerCase()
    .includes(search.trim().toLowerCase())
);
  

  
  return (
    
    <div className="min-h-screen bg-gray-900">

      <div className="flex justify-end gap-4 p-6">
        <Link
  to="/cart"
  className="text-white text-xl font-bold hover:text-blue-400"
>
  🛒Cart: {cartCount}
</Link>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
        >
          Register
        </Link>

      </div>

     <div className="flex flex-col items-center gap-8">

  <h1 className="text-5xl font-bold text-blue-500">
    E-Commerce
  </h1>

  <div className="flex flex-wrap justify-center gap-6">
    <div className="w-full flex justify-center mb-8">
  <input
    type="text"
    placeholder="Search products"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-96 px-4 py-3 rounded-lg border border-gray-300 text-white focus:outline-none"
  />
</div>

    {filteredProducts.map((product) => (
      <ProductCard
  key={product.id}
  product={product}
  onAddToCart={onAddToCart}
/>

      
    ))}

  </div>

</div>

    </div>
  );
};


export default Home;
