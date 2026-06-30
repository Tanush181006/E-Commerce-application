import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";


  const Home = () => {

  
  return (
    <div className="min-h-screen bg-gray-900">

      <div className="flex justify-end gap-4 p-6">

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

    {products.map((product) => (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        stock={product.stock}
        image={product.image}

      />
    ))}

  </div>

</div>

    </div>
  );
};


export default Home;
