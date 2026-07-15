import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cartCount, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
const isAdmin = localStorage.getItem("is_admin") === "true";
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("is_admin");
    setIsLoggedIn(false);
    navigate("/");
    localStorage.removeItem("full_name");
  };
  const fullName = localStorage.getItem("full_name");
  const firstName = fullName?.split(" ")[0];

  return (
    <nav className="bg-gray-800 text-white px-8 py-4 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-bold"
      >
        🛍️ ZenMart
      </Link>

      <div className="flex items-center gap-4">
        {isLoggedIn && fullName && (
  <span className="text-white text-2xl font-bold">
    👤{firstName}
  </span>
)}

        <Link
          to="/cart"
          className="bg-black hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          🛒 {cartCount}
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              to="/my-orders"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
              My Orders
            </Link>
            {isLoggedIn && isAdmin && (
  <Link
    to="/admin/dashboard"
    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
  >
    📋Dashboard
  </Link>
)}


            <button
              onClick={handleLogout}
              
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </>
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