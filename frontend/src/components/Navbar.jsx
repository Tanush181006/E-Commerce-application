import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav className="bg-gray-800 text-white px-8 py-4 flex justify-between items-center">
      <Link to="/home" className="text-2xl font-bold">
        🛍️ ZenMart
      </Link>

      <div className="flex items-center gap-4">

        <Link
          to="/cart"
          className="bg-black hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          🛒 {cartCount}
        </Link>

        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Register
            </Link>
          </>
        )}

      </div>

    </nav>
  );
};

export default Navbar;