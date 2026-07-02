import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({
  cart,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveFromCart,
  onEmptyCart,
}) => {
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <h2 className="text-3xl font-semibold mb-6">
            Your cart is empty 🛒
          </h2>

          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-white text-black rounded-xl p-6 mb-6 shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-56 h-40 object-contain mx-auto"
              />

              <h2 className="text-2xl font-bold text-center mt-4">
                {product.name}
              </h2>

              <p className="text-lg mt-4">
                <strong>Price:</strong> ₹{product.price}
              </p>

              <div className="flex items-center gap-4 mt-4">
                <strong>Quantity:</strong>

                <button
                  className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-lg text-xl font-bold"
                  onClick={() => onDecreaseQuantity(product.id)}
                >
                  -
                </button>

                <span className="text-xl font-bold">
                  {product.quantity}
                </span>

                <button
                  className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-lg text-xl font-bold"
                  onClick={() => onIncreaseQuantity(product.id)}
                >
                  +
                </button>
              </div>

              <p className="text-lg mt-4">
                <strong>Subtotal:</strong>{" "}
                <span className="text-green-600 font-bold">
                  ₹{product.price * product.quantity}
                </span>
              </p>

              <button
                onClick={() => onRemoveFromCart(product.id)}
                className="mt-5 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
              >
                🗑️ Remove
              </button>
            </div>
          ))}

          <div className="bg-white text-black rounded-xl p-6 shadow-lg mt-8">
            <h2 className="text-2xl font-bold">
              Total Items: {totalItems}
            </h2>

            <h2 className="text-3xl font-bold text-green-600 mt-3">
              Grand Total: ₹{totalPrice}
            </h2>

            <div className="flex justify-center gap-6 mt-8">
              <button
                onClick={() => navigate("/")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                Continue Shopping
              </button>

              <button
                onClick={onEmptyCart}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
              >
                Empty Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;