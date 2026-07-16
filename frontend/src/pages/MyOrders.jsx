import React, { useEffect, useState } from "react";
import {
  getMyOrders,
  cancelOrder,
} from "../api/orderApi";
import Navbar from "../components/Navbar";

const MyOrders = ({
  cartCount,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token = localStorage.getItem("access_token");

    try {
      const data = await getMyOrders(token);
      setOrders(data);
    } catch (error) {
      console.error(error);
      alert("Unable to fetch orders.");
    }
  };

  const handleCancelOrder = async (orderId) => {
    const token = localStorage.getItem("access_token");

    try {
      await cancelOrder(orderId, token);

      alert("Order cancelled successfully.");

      fetchOrders();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.detail ||
        "Unable to cancel order."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar
        cartCount={cartCount}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div className="max-w-5xl mx-auto py-10">

        <h1 className="text-5xl font-bold text-center text-white mb-10">
          My Orders
        </h1>

        {orders.length === 0 ? (

          <h2 className="text-center text-white text-2xl">
            No orders yet.
          </h2>

        ) : (

          orders.map((order) => (

            <div
              key={order.id}
              className="bg-white rounded-xl shadow-lg p-6 mb-8"
            >

              <div className="flex justify-between mb-6">

                <h2 className="text-2xl font-bold">
                  Order #{order.id}
                </h2>

                <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  {order.status}
                </span>

              </div>

              {order.order_items.map((item) => (

                <div
                  key={item.product.id}
                  className="flex items-center justify-between border-b py-4"
                >

                  <div className="flex items-center gap-5">

                    <img
                      src={`http://127.0.0.1:8000/static/products/${item.product.image_url}`}
                      alt={item.product.name}
                      className="w-20 h-20 object-contain"
                    />

                    <div>

                      <h3 className="text-xl font-semibold">
                        {item.product.name}
                      </h3>

                      <p>
                        Quantity: {item.quantity}
                      </p>

                    </div>

                  </div>

                  <h3 className="text-xl font-bold text-green-600">
                    ₹{item.price}
                  </h3>

                </div>

              ))}

              <div className="flex justify-between items-center mt-6">

                <h2 className="text-2xl font-bold">
                  Total: ₹{order.total_amount}
                </h2>

                {order.status !== "Delivered" &&
                order.status !== "Cancelled" && (
                  <button
                    onClick={() => handleCancelOrder(order.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
                  >
                    Cancel Order
                  </button>
                )}

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
};

export default MyOrders;