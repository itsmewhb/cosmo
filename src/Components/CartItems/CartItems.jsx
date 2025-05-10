import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/remove_icon1.png";
import fbg from "../Assets/newcartbackground.png";

const CartItems = () => {
  const {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    calculateSubtotal,
    clearCart,
  } = useContext(ShopContext);

  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    address: "",
    region: "",
    province: "",
    city: "",
    barangay: "",
    postalCode: "",
    payment: "COD",
  });

  const regions = ["Region 1", "Region 2", "Region 3"];
  const regionsAndProvinces = {
    "Region 1": {
      "Province 1": {
        cities: [{ name: "City 1", barangays: ["Barangay 1", "Barangay 2"] }],
      },
    },
    "Region 2": {
      "Province 2": {
        cities: [{ name: "City 2", barangays: ["Barangay 3", "Barangay 4"] }],
      },
    },
  };

  const handleCheckout = () => {
    if (calculateSubtotal() === 0) {
      alert("Your cart is empty. Please add items before proceeding to checkout.");
      return;
    }
    setIsCheckedOut(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setFormData({ ...formData, region: selectedRegion, province: "", city: "", barangay: "" });
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setFormData({ ...formData, province: selectedProvince, city: "", barangay: "" });
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setFormData({ ...formData, city: selectedCity, barangay: "" });
  };

  const handleBarangayChange = (e) => {
    setFormData({ ...formData, barangay: e.target.value });
  };

  // Decrease item quantity by 1
  const decreaseQuantity = (itemId) => {
    if (cartItems[itemId] > 1) {
      const updated = { ...cartItems, [itemId]: cartItems[itemId] - 1 };
      setCartItems(updated);
    }
  };

  const { setCartItems } = useContext(ShopContext); // Need access to setCartItems

  return (
    <div className="cartitems" style={{ backgroundImage: `url(${fbg})`, backgroundSize: "cover" }}>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        {!isCheckedOut && <p>Remove</p>}
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

                <div className="cartitems-quantity-controls">
                  {!isCheckedOut ? (
                    <>
                      <button
                        onClick={() => decreaseQuantity(e.id)}
                        className="quantity-btn"
                        disabled={cartItems[e.id] <= 0}
                      >
                        −
                      </button>
                      <span className="cartitems-quantity">{cartItems[e.id]}</span>
                      <button
                        onClick={() => addToCart(e.id)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <span className="cartitems-quantity">{cartItems[e.id]}</span>
                  )}
                </div>

                <p>₱{e.new_price * cartItems[e.id]}</p>

                {!isCheckedOut && (
                  <img
                    className="cartitems-remove-icon"
                    src={remove_icon}
                    onClick={() => removeFromCart(e.id)}
                    alt="Remove"
                  />
                )}
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

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
            <button onClick={clearCart} className="clear-cart-button">
              CLEAR CART
            </button>
          </div>
        </div>
      )}

      {isCheckedOut && !orderComplete && (
        <div className="checkout-form-container">
          <h2>Checkout Details</h2>
          <form className="checkout-form" onSubmit={handleFormSubmit}>
            <label>
              Full Name:
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>
            <label>
              Street:
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </label>
            <label>
              Region:
              <select value={formData.region} onChange={handleRegionChange}>
                <option value="">Select Region</option>
                {regions.map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </label>
            {formData.region && (
              <label>
                Province:
                <select value={formData.province} onChange={handleProvinceChange}>
                  <option value="">Select Province</option>
                  {Object.keys(regionsAndProvinces[formData.region]).map((province) => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </label>
            )}
            {formData.province && (
              <label>
                City:
                <select value={formData.city} onChange={handleCityChange}>
                  <option value="">Select City</option>
                  {regionsAndProvinces[formData.region][formData.province].cities.map((city) => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                  ))}
                </select>
              </label>
            )}
            {formData.city && (
              <label>
                Barangay:
                <select value={formData.barangay} onChange={handleBarangayChange}>
                  <option value="">Select Barangay</option>
                  {regionsAndProvinces[formData.region][formData.province].cities
                    .find(city => city.name === formData.city)?.barangays.map((barangay) => (
                      <option key={barangay} value={barangay}>{barangay}</option>
                  ))}
                </select>
              </label>
            )}

            <label>
              Postal Code:
              <input
                type="text"
                required
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
              />
            </label>

            <label>
              Payment Method:
              <select value={formData.payment} onChange={(e) => setFormData({ ...formData, payment: e.target.value })}>
                <option value="COD">Cash on Delivery (COD)</option>
                <option value="Credit">Credit Card</option>
                <option value="Debit">Debit Card</option>
              </select>
            </label>

            <button type="submit">Place Order</button>
          </form>
        </div>
      )}

      {orderComplete && (
        <div className="order-complete">
          <h2>Order Completed!</h2>
          <p>Thank you for your order. We will process it shortly.</p>
        </div>
      )}
    </div>
  );
};

export default CartItems;
