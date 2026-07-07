import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-6">

      <h1 className="text-5xl font-bold text-white mb-12">
        🛍️ ZenMart
      </h1>

      

      <div className="flex flex-col md:flex-row gap-10">

        <Link to="/home">
          <div className="bg-white rounded-xl shadow-lg w-80 h-72 flex flex-col justify-center items-center hover:scale-105 hover:shadow-2xl transition duration-300">

            <div className="text-7xl mb-6">
              👤
            </div>

            <h2 className="text-3xl font-bold">
              User
            </h2>

            <p className="text-gray-600 mt-3">
              Browse Products
            </p>

          </div>
        </Link>

        <Link to="/admin/login">
          <div className="bg-white rounded-xl shadow-lg w-80 h-72 flex flex-col justify-center items-center hover:scale-105 hover:shadow-2xl transition duration-300">

            <div className="text-7xl mb-6">
              🛡️
            </div>

            <h2 className="text-3xl font-bold">
              Admin
            </h2>

            <p className="text-gray-600 mt-3">
              Manage Store
            </p>

          </div>
        </Link>

      </div>

    </div>
  );
};

export default Home;