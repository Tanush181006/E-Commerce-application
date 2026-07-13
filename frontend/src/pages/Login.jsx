import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = ({ setIsLoggedIn, onAddToCart }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    if (email === "") {
      setError("Email is required");
      return;
    }

    if (!email.includes("@") || !email.includes(".com")) {
      setError("Please enter a valid email address");
      return;
    }

    if (password === "") {
      setError("Password is required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    setIsLoggedIn(true);
    if (location.state?.product) {
    onAddToCart(location.state.product);
}
    navigate(location.state?.redirectAfterAuth || "/");
  };

  return (
    <nav>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">

          <h1 className="text-white text-3xl font-bold text-center mb-6">
            User Login
          </h1>

          {location.state?.message && (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg mb-4 text-center">
              {location.state.message}
            </div>
          )}

          <div className="text-white">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="text-white">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 rounded mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className="text-center p-2 mt-6 text-white">
            Don't have an account?{" "}
            <Link
              to="/register"
              state={location.state}
            >
              <span className="text-blue-400 font-semibold cursor-pointer">
                Register
              </span>
            </Link>
          </p>

          {error && (
            <p className="text-red-400 text-center mb-4">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 mb-2 rounded transition"
          >
            Login
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Login;