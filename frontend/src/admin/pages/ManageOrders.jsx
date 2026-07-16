import React, { useEffect, useState } from "react";
import {
  getAllOrders,
  updateOrderStatus,
} from "../../api/adminOrderApi";
import { Link } from "react-router-dom";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getAllOrders(token);
      setOrders(data);
    } catch (error) {
      console.error(error);
      alert("Unable to fetch orders.");
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateOrderStatus(id, status, token);
      fetchOrders();
    } catch (error) {
      console.error(error);
      alert("Unable to update status.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-5xl font-bold text-white">
          Manage Orders
        </h1>

        <Link
          to="/admin/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          ← Dashboard
        </Link>

      </div>

      {orders.length === 0 ? (

        <h2 className="text-center text-white text-2xl">
          No orders found.
        </h2>

      ) : (

        orders.map((order) => (

          <div
            key={order.id}
            className="bg-white rounded-xl p-6 shadow-lg mb-8"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  Order #{order.id}
                </h2>

                <p className="mt-2">
                  Customer : {order.user.full_name}
                </p>

              </div>

              <div className="text-right">

                <p className="font-bold text-lg">
                  ₹{order.total_amount}
                </p>

                <p className="mt-2">
                  Current Status:
                </p>

                <span className="font-bold text-blue-600">
                  {order.status}
                </span>

              </div>

            </div>

            <hr className="my-6" />

            {order.order_items.map((item) => (

              <div
                key={item.product.id}
                className="flex justify-between items-center py-3 border-b"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={`http://127.0.0.1:8000/static/products/${item.product.image_url}`}
                    alt={item.product.name}
                    className="w-16 h-16 object-contain"
                  />

                  <div>

                    <h3 className="font-semibold">
                      {item.product.name}
                    </h3>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                  </div>

                </div>

                <p className="font-bold">
                  ₹{item.price}
                </p>

              </div>

            ))}

            <div className="flex justify-between items-center mt-6">

              <select
                defaultValue={order.status}
                onChange={(e) =>
                  handleStatusUpdate(
                    order.id,
                    e.target.value
                  )
                }
                className="border rounded-lg px-4 py-2"
              >
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>

            </div>

          </div>

        ))

      )}

    </div>
  );
};

export default ManageOrders;