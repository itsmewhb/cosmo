import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

// Initialize cart with quantity 0 for each product
const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((item) => {
    cart[item.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add one quantity
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Subtract one quantity (keep item unless it hits 0)
  const decreaseQuantity = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  // Remove entire item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
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
    setCartItems,
    addToCart,
    decreaseQuantity,  // use this in the (-) button
    removeFromCart,    // use this in 🗑️ icon
    clearCart,
    getTotalCartQuantity,
    calculateSubtotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
