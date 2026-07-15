import React from "react";
import CategoryPage from "../components/CategoryPage";

const Electronics = ({
  cartCount,
  onAddToCart,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <CategoryPage
      title="Electronics"
      categoryId={1}
      cartCount={cartCount}
      onAddToCart={onAddToCart}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Electronics;