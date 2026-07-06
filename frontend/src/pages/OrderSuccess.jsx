import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">

      <div className="bg-white rounded-xl shadow-lg p-10 text-center">

        <div className="text-6xl mb-6">
          ✅
        </div>

        <h1 className="text-4xl font-bold text-green-600">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Thank you for shopping with us.
        </p>

        <p className="text-gray-600 mb-8">
          Your order has been placed successfully.
        </p>

        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
};

export default OrderSuccess;