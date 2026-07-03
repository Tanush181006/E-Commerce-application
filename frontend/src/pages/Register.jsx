import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Register = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    const[error, setError] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();
  if (
  !fullName.trim() ||
  !email.trim() ||
  !password.trim() ||
  !confirmPassword.trim()
) {
  setError("Please fill all the details");
  return;
}
if (!email.includes("@") || !email.includes(".com")) {
  setError("Please enter a valid email address");
  return;
}

if (password !== confirmPassword) {
  setError("Passwords do not match.");
  return;
}
if (password.length < 6) {
  setError("Password must be at least 6 characters long.");
  return;
}
setError("");
setIsLoggedIn(true);
 navigate("/");


};
  return (
    <nav>
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">

      <div className="bg-white rounded-xl shadow-xl p-8 py-2 w-full max-w-md ">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          Create Account
        </h1>
       

       
        <form onSubmit={handleSubmit} className="mt-6">

          <div className="mb-4">
            <label className="block font-semibold mb-1">
              Name
            </label>

            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">
              Email
            </label>

            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">
              Password
            </label>

            <input
              type="password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">
              Confirm Password
            </label>

            <input
              type="password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
           {error && (
  <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 text-center">
    {error}
  </p>
)}

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Register
          </button>

        </form>
<p
         className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          
          <Link to="/login">
          <span className="text-blue-600 font-semibold cursor-pointer">
            Login
          </span>
          </Link>
        </p>

      </div>

    </div>
    </nav>
  );
};
export default Register;