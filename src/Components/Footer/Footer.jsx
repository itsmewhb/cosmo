import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';
import tiktok_icon from '../Assets/tik-tok (1).png';
import instagram_icon from '../Assets/instag (2).png';
import facebook_icon from '../Assets/fb_icons3.png';
import reel1 from '../Assets/reels1.mp4.mp4';
import reel3 from '../Assets/reels3.mp4';
import reel4 from '../Assets/reels4.mp4';
import reel5 from '../Assets/reels5.mp4';
import reel6 from '../Assets/reels6.mp4';

const all_product = [
  {
    id: 3,
    name: "Strawberry Rococo Embossed Blush",
    category: "footer-video",
    video: reel3,
    new_price: 1245.00,
    old_price: 1275.00,
  },
  {
    id: 1,
    name: "Little Angel Embossed Highlighter",
    category: "footer-video",
    video: reel1,
    new_price: 1245.00,
    old_price: 1265.00,
  },
  {
    id: 4,
    name: "Little Angel Cream Blush",
    category: "footer-video",
    video: reel4,
    new_price: 1355.00,
    old_price: 1455.00,
  },
  {
    id: 5,
    name: "Butterfly Cloud Collar Rouge Box Highlighting & Blush Duo Powder",
    category: "footer-video",
    video: reel5,
    new_price: 1155.00,
    old_price: 1255.00,
  },
  {
    id: 6,
    name: "Violet Strawberry Rococo Embossed Blush",
    category: "footer-video",
    video: reel6,
    new_price: 1165.00,
    old_price: 1255.00,
  },
];

export const Footer = () => {
  const location = useLocation();

  return (
    <div className="footer">
      {/* Heading Above Video */}
      <h2 className="footer-heading">OUR BESTSELLERS</h2>

      {/* Video Reels Section */}
      <div className="footer-video">
        {all_product.map((product) => (
          <div key={product.id} className="video-container">
            <a href={`/product/${product.id}`} className="video-link">
              <video
                width="317"
                autoPlay
                muted
                loop
                playsInline
                className="reel-video"
              >
                <source src={product.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-overlay">
                <p className="product-name">{product.name}</p>
                <p className="product-price">₱{product.new_price.toFixed(2)}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Footer Content */}
      <div className="footer-logo">
        <p>FLOWER KNOWS</p>
      </div>
      <ul className="footer-links">
        {location.pathname !== '/about' && (
          <li><a href="/about">About Us</a></li>
        )}
      </ul>
      <div className="footer-socials-icons">
        <div className="footer-icons-container">
          <a href="https://www.tiktok.com/@flowerknows_jp" target="_blank" rel="noopener noreferrer">
            <img src={tiktok_icon} alt="TikTok" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/itsmewabz/" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.facebook.com/wahabdisomimba" target="_blank" rel="noopener noreferrer">
            <img src={facebook_icon} alt="Facebook" />
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};
