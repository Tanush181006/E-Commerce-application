import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getProduct } from "../api/productApi";

const ProductDetails = ({
  onAddToCart,
  cartCount,
  isLoggedIn,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const data = await getProduct(id);
      setProduct(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <h1 className="text-3xl">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Navbar cartCount={cartCount} />

      <div className="p-8">

        <div className="flex flex-col items-center">

          <img
            src={`http://127.0.0.1:8000/static/products/${product.image_url}`}
            alt={product.name}
            className="w-80 h-80 object-contain"
          />

          <h1 className="text-5xl font-bold mt-6">
            {product.name}
          </h1>

          <p className="text-xl mt-3 text-gray-300">
            {product.description}
          </p>

          <p className="text-2xl text-green-500 mt-4">
            ₹{product.price}
          </p>

          {product.stock > 0 ? (
            <p className="text-green-500 font-semibold text-xl mt-3">
              In Stock ({product.stock} left)
            </p>
          ) : (
            <p className="text-red-500 font-semibold text-xl mt-3">
              Out of Stock
            </p>
          )}

          <button
            onClick={() => {
              if (!isLoggedIn) {
                navigate("/login", {
                  state: {
                    redirectAfterAuth: "/cart",
                    message: "Please login to add items to your cart.",
                    product,
                  },
                });
                return;
              }

              onAddToCart(product);
            }}
            disabled={product.stock <= 0}
            className={`mt-8 px-6 py-3 rounded-lg text-white font-semibold ${
              product.stock > 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;