import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { placeOrder } from "./api/orderApi";

function App() {

  const [cart, setCart] = useState([]);
const [isLoggedIn, setIsLoggedIn] = useState(
  !!localStorage.getItem("access_token")
);
  const handleAddToCart = (product) => {
   

  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
     setCart(
      cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  } else {

    setCart([ 
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ]);

  }
};
 const increaseQuantity = (productId) => {
  setCart(
    cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ) 
  )

};
const decreaseQuantity = (productId) => {
  setCart(
    cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};
const removeFromCart = (productId) => { 
    setCart(cart.filter((item) => item.id !== productId));
  };  
  const emptyCart = () => {
  setCart([]);
};
const handlePlaceOrder = async () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    alert("Please login first.");
    return false;
  }

  try {
    await placeOrder(cart, token);

    setCart([]);

    return true;

  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.detail ||
      "Failed to place order."
    );

    return false;
  }
};

  return (
    <AppRoutes
      cart={cart}
      cartCount={cart.length}
      onAddToCart={handleAddToCart}
      onIncreaseQuantity={increaseQuantity}
      onDecreaseQuantity={decreaseQuantity}
      onRemoveFromCart={removeFromCart}
      onEmptyCart={emptyCart}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      onPlaceOrder={handlePlaceOrder}
    />
  );
}

export default App;