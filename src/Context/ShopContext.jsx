import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"; // Import your product list

export const ShopContext = createContext(null);

// Function to initialize cart items to 0 for all products
const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((item) => {
    cart[item.id] = 0; // Set initial cart quantity to 0 for each item
  });
  return cart;
};

const ShopContextProvider = (props) => {
  // Cart state: Initialize with default cart (all quantities set to 0)
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add item to cart: Increment quantity by 1
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  // Remove item from cart: Decrement quantity by 1, but not less than 0
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0
    }));
  };

  // Clear all items in the cart
  const clearCart = () => {
    setCartItems(getDefaultCart()); // Reset cart to default state (all quantities set to 0)
  };

  // Calculate the total quantity of items in the cart
  const getTotalCartQuantity = () => {
    return Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);
  };

  // Calculate the subtotal (total price) of items in the cart
  const calculateSubtotal = () => {
    return all_product.reduce((acc, item) => {
      return acc + (cartItems[item.id] ? item.new_price * cartItems[item.id] : 0);
    }, 0);
  };

  // Values to provide to the context consumers
  const contextValue = {
    all_product,        // List of all available products
    cartItems,          // Cart state
    addToCart,          // Function to add items to the cart
    removeFromCart,     // Function to remove items from the cart
    clearCart,          // Function to clear the cart
    getTotalCartQuantity, // Function to get the total quantity of items in the cart
    calculateSubtotal   // Function to calculate the subtotal of the cart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children} {/* Render children components that can access the context */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
