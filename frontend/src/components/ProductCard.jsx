import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 w-90">

      <Link to={`/product/${props.product.id}`} className="block">
        <img
          src={props.product.image}
          alt={props.product.name}
        />

        <h2 className="text-2xl font-bold mt-4">
          {props.product.name}
        </h2>
      </Link>

      <p className="text-xl text-green-600 mt-2">
        ₹{props.product.price}
      </p>

      {props.product.stock ? (
        <p className="text-green-600 font-semibold mt-2">
          In Stock
        </p>
      ) : (
        <p className="text-red-600 font-semibold mt-2">
          Out of Stock
        </p>
      )}

      <button
        className={`px-4 py-2 rounded-lg mt-4 text-white ${
          props.product.stock
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        onClick={() => props.onAddToCart(props.product)}
        disabled={!props.product.stock}
      >
        {props.product.stock ? "Add to Cart" : "Out of Stock"}
      </button>

    </div>
  );
};

export default ProductCard;