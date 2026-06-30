import React, { useState } from "react";

const QuantitySelector = () => {

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 text-blue-600">
      <h1 className="text-4xl font-bold">Product Quantity</h1>

      <div className="flex items-center gap-6">
        <button
          className="bg-red-500 px-5 py-2 rounded text-2xl"
          onClick={decreaseQuantity}
        >
          -
        </button>

        <span className="text-4xl">{quantity}</span>

        <button
          className="bg-green-500 px-5 py-2 rounded text-2xl"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>

      <p className="text-xl">
        Current Quantity: <span className="font-bold">{quantity}</span>
      </p>
    </div>
  );
};

export default QuantitySelector;