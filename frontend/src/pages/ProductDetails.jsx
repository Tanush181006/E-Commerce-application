import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.jsx";

const ProductDetails = () => {

  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  return (
  <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">

    <img
      src={product.image}
      className="w-72"
    />

    <h1 className="text-5xl font-bold mt-6">
      {product.name}
    </h1>

    <p className="text-2xl text-green-500 mt-4">
      ₹{product.price}
    </p>

  </div>
);
};

export default ProductDetails;