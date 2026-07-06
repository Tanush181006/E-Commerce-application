import React from "react";
import CategoryPage from "../components/CategoryPage";
import watches from "../data/watches";

const Watches = ({
  cartCount,
  onAddToCart,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <CategoryPage
      title="Watches"
      products={watches}
      cartCount={cartCount}
      onAddToCart={onAddToCart}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Watches;