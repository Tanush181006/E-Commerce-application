import React from "react";
import CategoryPage from "../components/CategoryPage";
import electronics from "../data/electronics";

const Electronics = ({
  cartCount,
  onAddToCart,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <CategoryPage
      title="Electronics"
      products={electronics}
      cartCount={cartCount}
      onAddToCart={onAddToCart}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Electronics;