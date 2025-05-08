import React, { useContext, useState, useRef } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [showAddedMsg, setShowAddedMsg] = useState(false);
  const mainImgRef = useRef(null);

  const handleAddToCart = () => {
    addToCart(product.id);
    setShowAddedMsg(true);
    triggerFlyAnimation();
    setTimeout(() => setShowAddedMsg(false), 1500);
  };

  const triggerFlyAnimation = () => {
    const cartIcon = document.querySelector('.nav-login-cart img');
    const img = mainImgRef.current;
    if (!img || !cartIcon) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    const flyImg = img.cloneNode();
    flyImg.className = 'flying-img';
    document.body.appendChild(flyImg);

    flyImg.style.left = `${imgRect.left}px`;
    flyImg.style.top = `${imgRect.top}px`;

    requestAnimationFrame(() => {
      flyImg.style.transform = `translate(${cartRect.left - imgRect.left}px, ${cartRect.top - imgRect.top}px) scale(0.1)`;
      flyImg.style.opacity = '0';
    });

    flyImg.addEventListener('transitionend', () => {
      flyImg.remove();
    });
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img ref={mainImgRef} className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">Price:
          <div className="productdisplay-right-price-old">₱{product.old_price}</div>
          <div className="productdisplay-right-price-new">₱{product.new_price}</div>
        </div>

        <button onClick={handleAddToCart}>ADD TO CART</button>
        {showAddedMsg && (
          <div className="added-to-cart-msg">Added to cart!</div>
        )}
      </div>
    </div>
  );
};
