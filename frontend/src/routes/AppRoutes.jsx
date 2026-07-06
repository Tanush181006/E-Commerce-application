  import React from "react";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Shoes from "../pages/Shoes.jsx";
  import Login from "../pages/Login.jsx";
  import Register from "../pages/Register.jsx";
  import NotFound from "../pages/NotFound.jsx";
  import AdminLogin from "../admin/pages/AdminLogin.jsx";
  import Dashboard from "../admin/pages/Dashboard";
  import QuantitySelector from "../components/QuantitySelector";
  import Cart from "../pages/Cart.jsx";
  import ProductDetails from "../pages/ProductDetails.jsx";
  import Home from "../pages/Home.jsx";
  import Electronics from "../pages/Electronics.jsx";
  import Watches from "../pages/Watches.jsx";
  import OrderSuccess from "../pages/OrderSuccess.jsx";

  function AppRoutes({cart, cartCount, onAddToCart,
     onIncreaseQuantity, onDecreaseQuantity,
     onRemoveFromCart, onEmptyCart, 
    isLoggedIn, setIsLoggedIn, onPlaceOrder})
    
   {
    return (
      <BrowserRouter>
        <Routes>
          <Route
  path="/"
  element={
    <Home
      cartCount={cartCount}
      onAddToCart={onAddToCart}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
  }
/>
<Route
  path="/category/shoes"
  element={
    <Shoes
      cartCount={cartCount}
      onAddToCart={onAddToCart}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
  }
/>

<Route
  path="/category/electronics"
  element={
    <Electronics
      cartCount={cartCount}
      onAddToCart={onAddToCart}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
  }
/>

<Route
  path="/category/watches"
  element={
    <Watches
      cartCount={cartCount}
      onAddToCart={onAddToCart}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
  }
/>
          <Route
    path="/product/:id"
    element={
      <ProductDetails
        cartCount={cartCount}
        onAddToCart={onAddToCart}
      />
    }
  />
  
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/components/quantity-selector" element={<QuantitySelector />} />
          <Route path="/cart" element={<Cart cart={cart}
          onIncreaseQuantity={onIncreaseQuantity} 
          onDecreaseQuantity={onDecreaseQuantity}
            onRemoveFromCart={onRemoveFromCart} 
            onEmptyCart={onEmptyCart}
            onPlaceOrder={onPlaceOrder}/>} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default AppRoutes;