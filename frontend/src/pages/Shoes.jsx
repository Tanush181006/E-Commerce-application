import React from "react";
import CategoryPage from "../components/CategoryPage";
import shoes from "../data/shoes";

const Shoes = ({
  cartCount,
  onAddToCart,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <CategoryPage
      title="Shoes"
      products={shoes}
      cartCount={cartCount}
      onAddToCart={onAddToCart}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Shoes;