import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email == "") {
      setError("Email is required");
      return;
    }

    if (password == "") {
      setError("Password is required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">

        <h1 className="text-white text-3xl font-bold text-center mb-6">
          User Login
        </h1>

        
        <div className=" text-white">
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>


        <div className=" text-white">
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>


        <div className="flex items-center gap-2 text-white mb-4">
          <input
            id="remember"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />

          <label htmlFor="remember"> 
            Remember Me
            </label>
        </div>

        {error && (
          <p className="text-red-400 text-center mb-4">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition"
        >
          Login
        </button>

   

      </div>
    </div>
  );
};

export default Login;
