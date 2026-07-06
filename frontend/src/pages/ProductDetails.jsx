import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import allProducts from "../data/allProducts";
import Navbar from "../components/Navbar";

const ProductDetails = ({ onAddToCart, cartCount }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = allProducts.find(
    (product) => product.id === Number(id)
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Navbar cartCount={cartCount} />

      <div className="p-8">

       

        <div className="flex flex-col items-center">

          <img
            src={product.image}
            alt={product.name}
            className="w-72"
          />

          <h1 className="text-5xl font-bold mt-6">
            {product.name}
          </h1>

          <p className="text-2xl text-green-500 mt-4">
            ₹{product.price}
          </p>

          {product.stock ? (
            <p className="text-green-500 font-semibold text-xl mt-3">
              In Stock
            </p>
          ) : (
            <p className="text-red-500 font-semibold text-xl mt-3">
              Out of Stock
            </p>
          )}
 
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.stock}
            className={`mt-8 px-6 py-3 rounded-lg text-white font-semibold ${
              product.stock
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {product.stock ? "Add to Cart" : "Out of Stock"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;