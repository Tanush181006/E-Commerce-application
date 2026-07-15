import React from "react";
import CategoryPage from "../components/CategoryPage";

const Shoes = ({
  cartCount,
  onAddToCart,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <CategoryPage
      title="Shoes"
      categoryId={3}
      cartCount={cartCount}
      onAddToCart={onAddToCart}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Shoes;