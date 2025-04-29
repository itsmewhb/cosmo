import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/remove_icon1.png";
import fbg from "../Assets/fbg.webp";

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart, getTotalCartQuantity, calculateSubtotal } =
    useContext(ShopContext);

  // Handle animation when adding an item
  const handleAddToCart = (itemId, event) => {
    const targetElement = event.target.closest(".carticon-product-icon"); // Get clicked product image

    if (targetElement) {
      console.log("Throw animation applied!", targetElement); // Debugging check

      // Clone the image to animate it separately
      const animatedImage = targetElement.cloneNode(true);
      animatedImage.classList.add("throw-animation"); // Apply animation class

      // Append cloned image to body
      document.body.appendChild(animatedImage);

      // Position cloned image near the original
      const rect = targetElement.getBoundingClientRect();
      animatedImage.style.position = "absolute";
      animatedImage.style.left = `${rect.left}px`;
      animatedImage.style.top = `${rect.top}px`;

      // Remove cloned image after animation completes
      setTimeout(() => {
        addToCart(itemId); // Add item after animation
        animatedImage.remove(); // Cleanup
      }, 600);
    }
  };

  return (
    <div className="cartitems" style={{ backgroundImage: `url(${fbg})`, backgroundSize: "cover" }}>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={e.image}
                  alt=""
                  className="carticon-product-icon"
                  onClick={(event) => handleAddToCart(e.id, event)}
                />
                <p>{e.name}</p>
                <p>₱{e.new_price}</p>
                <p className="cartitems-quantity">{cartItems[e.id]}</p>
                <p>₱{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₱{calculateSubtotal()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₱{calculateSubtotal()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;