import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import NotFound from "../pages/NotFound.jsx";
import AdminLogin from "../admin/pages/AdminLogin.jsx";
import Dashboard from "../admin/pages/Dashboard";
import QuantitySelector from "../components/QuantitySelector";
import Cart from "../pages/Cart.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";

function AppRoutes({cart, cartCount, onAddToCart, onIncreaseQuantity, onDecreaseQuantity, onRemoveFromCart, onEmptyCart}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/"
  element={
    <Home
      cartCount={cartCount}
      onAddToCart={onAddToCart}
    />
  }
/>
<Route
  path="/product/:id"
  element={
    <ProductDetails
      onAddToCart={onAddToCart}
    />
  }
/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/components/quantity-selector" element={<QuantitySelector />} />
        <Route path="/cart" element={<Cart cart={cart}
         onIncreaseQuantity={onIncreaseQuantity} 
         onDecreaseQuantity={onDecreaseQuantity}
          onRemoveFromCart={onRemoveFromCart} 
          onEmptyCart={onEmptyCart}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;