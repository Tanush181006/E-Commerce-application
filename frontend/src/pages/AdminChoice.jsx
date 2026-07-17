import React from "react";
import { useNavigate } from "react-router-dom";

const AdminChoice = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center w-125">

        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome!
        </h1>

        <p className="text-gray-700 text-lg mb-8">
          Your account has administrator privileges.
          <br />
          Where would you like to continue?
        </p>

        <div className="flex flex-col gap-5">

          <button
            onClick={() => navigate("/")}
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
            🛍 Continue Shopping
          </button>

          <button
            onClick={() => navigate("/admin/dashboard")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            ⚙ Admin Dashboard
          </button>

        </div>

      </div>
    </div>
  );
};

export default AdminChoice;