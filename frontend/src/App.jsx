import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {

  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    />
  );
}

export default App;