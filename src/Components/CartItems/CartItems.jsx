import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/remove_icon1.png";
import fbg from "../Assets/fbg.webp";

const CartItems = () => {
  const {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartQuantity,
    calculateSubtotal,
  } = useContext(ShopContext);

   const [isCheckedOut, setIsCheckedOut] = useState(false);

  // Add to cart with animation
  const handleAddToCart = (itemId, event) => {
    const targetElement = event?.target?.closest(".carticon-product-icon");

     if (targetElement) {
      const animatedImage = targetElement.cloneNode(true);
      animatedImage.classList.add("throw-animation");

       document.body.appendChild(animatedImage);

       const rect = targetElement.getBoundingClientRect();
      animatedImage.style.position = "absolute";
      animatedImage.style.left = `${rect.left}px`;
      animatedImage.style.top = `${rect.top}px`;

       setTimeout(() => {
        addToCart(itemId);
        animatedImage.remove();
      }, 600);
    } else {
      addToCart(itemId); // fallback if no animation
    }
  };

  const handleCheckout = () => {
    if (calculateSubtotal() === 0) {
      alert("Your cart is empty. Please add items before proceeding to checkout.");
      return;
    }
    setIsCheckedOut(true);
  };

   return (
    <div
      className="cartitems"
      style={{ backgroundImage: `url(${fbg})`, backgroundSize: "cover" }}
    >
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
            <div key={e.id} className="cartitems-format">
              <div className="cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>₱{e.new_price}</p>

                {/* Quantity controls */}
                <div className="cartitems-quantity-controls">
                  <button
                    onClick={() => removeFromCart(e.id)}
                    className="quantity-btn"
                    disabled={cartItems[e.id] <= 1}
                  >
                    −
                  </button>
                  <span className="cartitems-quantity">{cartItems[e.id]}</span>

                  <button
                    onClick={(event) => handleAddToCart(e.id, event)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>

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

      {/* Cart totals section */}
      {!isCheckedOut && (
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
            <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      )}

      {/* Receipt after checkout */}
      {isCheckedOut && (
        <div className="receipt-box">
          <h2>Your Receipt:</h2>
          <div className="receipt-details">
            {all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <div key={e.id} className="receipt-item">
                    <p>
                      {e.name} x{cartItems[e.id]}
                    </p>
                    <p>₱{e.new_price} each</p>
                    <p>Total: ₱{e.new_price * cartItems[e.id]}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="receipt-total">
            <h3>Total Amount: ₱{calculateSubtotal()}</h3>
            <p>Thank you for shopping with us!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
