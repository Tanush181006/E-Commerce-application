import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import NotFound from "../pages/NotFound.jsx";
import AdminLogin from "../admin/pages/AdminLogin.jsx";
import Dashboard from "../admin/pages/Dashboard";
import QuantitySelector from "../components/QuantitySelector";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/components/quantity-selector" element={<QuantitySelector />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;