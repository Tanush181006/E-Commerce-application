import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">

      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md text-center">

        <h1 className="text-4xl font-bold text-blue-600 mb-2">
          Admin Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Welcome, Admin!
        </p>

        <div className="flex flex-col gap-4">

          <Link
            to="/admin/add-product"
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
           ➕ Add Product
          </Link>

          <Link
            to="/admin/manage-products"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            📦 Manage Products
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold"
          >
            🚪 Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;