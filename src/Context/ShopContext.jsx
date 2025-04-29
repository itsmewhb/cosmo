import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((item) => {
    cart[item.id] = 0; // Ensure cart uses item IDs
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0
    }));
  };

  const getTotalCartQuantity = () => {
    return Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);
  };

  const calculateSubtotal = () => {
    return all_product.reduce((acc, item) => {
      return acc + (cartItems[item.id] ? item.new_price * cartItems[item.id] : 0);
    }, 0);
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartQuantity,
    calculateSubtotal
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;