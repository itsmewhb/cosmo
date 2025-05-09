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

  const regionsAndProvinces = {
    NCR: {
      "Metro Manila": {
        cities: [
          { name: "Taguig", barangays: ["Upper Bicutan", "Central Bicutan", "Lower Bicutan"] },
          { name: "Pasay", barangays: ["Barangay 78", "Barangay 85", "Barangay 77"] },
          { name: "Makati", barangays: ["San Lorenzo", "Olympia", "Magallanes"] },
        ],
      },
    },
    "Region 1": {
      "Ilocos Norte": {
        cities: [
          { name: "Laoag", barangays: ["San Agustin", "San Guillermo"] },
          { name: "Batac", barangays: ["Ricarte", "Caunayan"] },
        ],
      },
      "Ilocos Sur": {
        cities: [
          { name: "Vigan", barangays: ["Ayusan Norte", "Ayusan Sur"] },
          { name: "Candon", barangays: ["Bagani", "Amguid"] },
        ],
      },
    },
    "Region 2": {
      "Cagayan": {
        cities: [
          { name: "Tuguegarao", barangays: ["Leonarda", "Linao East"] },
          { name: "Cauayan", barangays: ["Ugac Norte", "Tanza"] },
        ],
      },
      "Isabela": {
        cities: [
          { name: "Ilagan", barangays: ["Baligtasan", "Pilar"] },
          { name: "Cordon", barangays: ["Calamagui", "Fugu"] },
        ],
      },
    },
    "Region 3": {
      "Pampanga": {
        cities: [
          { name: "San Fernando", barangays: ["Bulaon", "Del Pilar"] },
          { name: "Angeles", barangays: ["Mexico", "Agapito"] },
        ],
      },
      "Bulacan": {
        cities: [
          { name: "Malolos", barangays: ["Anilao", "Atlag"] },
          { name: "Meycauayan", barangays: ["Pajo", "Pandayan"] },
        ],
      },
    },
  };

  const regions = Object.keys(regionsAndProvinces);

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
      addToCart(itemId);
    }
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
            <div key={e.id} className="cartitems-format">
              <div className="cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>₱{e.new_price}</p>
                <div className="cartitems-quantity-controls">
                  <button onClick={() => removeFromCart(e.id)} className="quantity-btn" disabled={cartItems[e.id] <= 1}>
                    −
                  </button>
                  <span className="cartitems-quantity">{cartItems[e.id]}</span>
                  <button onClick={(event) => handleAddToCart(e.id, event)} className="quantity-btn">+</button>
                </div>
                <p>₱{e.new_price * cartItems[e.id]}</p>
                <img className="cartitems-remove-icon" src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove" />
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
                    .find((city) => city.name === formData.city)
                    ?.barangays.map((barangay) => (
                      <option key={barangay} value={barangay}>{barangay}</option>
                    ))}
                </select>
              </label>
            )}
            <label>
              Postal Code:
              <input
                type="text"
                inputMode="numeric"
                maxLength="4"
                pattern="\d{4}"
                required
                value={formData.postalCode}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,4}$/.test(value)) {
                    setFormData({ ...formData, postalCode: value });
                  }
                }}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </label>
            <label>
              Payment Method:
              <select value={formData.payment} onChange={(e) => setFormData({ ...formData, payment: e.target.value })}>
                <option value="COD">Cash on Delivery</option>
                <option value="GCash">GCash</option>
              </select>
            </label>
            <button type="submit">Confirm Order</button>
          </form>
        </div>
      )}

      {orderComplete && (
        <div className="receipt-box">
          <h2>Order Summary</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>Region:</strong> {formData.region}</p>
          <p><strong>Province:</strong> {formData.province}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>Barangay:</strong> {formData.barangay}</p>
          <p><strong>Postal Code:</strong> {formData.postalCode}</p>
          <p><strong>Payment Method:</strong> {formData.payment}</p>
          <h2>Your Receipt:</h2>
          <div className="receipt-details">
            {all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <div key={e.id} className="receipt-item">
                    <p>{e.name} x{cartItems[e.id]}</p>
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
