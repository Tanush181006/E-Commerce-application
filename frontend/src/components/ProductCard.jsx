import React from "react";

const ProductCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 w-90">

      <img
        src={props.image}
      />

      <h2 className="text-2xl font-bold mt-4">
        {props.name}
      </h2>

      <p className="text-xl text-green-600 mt-2">
        ₹{props.price}
      </p>

    </div>
  );
};

export default ProductCard;