import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import reel1 from '../Assets/reels1.mp4.mp4';
import reel2 from '../Assets/reelsrm.mp4';
import reel3 from '../Assets/reels3.mp4';
import reel4 from '../Assets/reels4.mp4';
import reel5 from '../Assets/reels5.mp4';
import reel6 from '../Assets/reels6.mp4';

export const Footer = () => {
  const location = useLocation();

  return (
    <div className="footer">
  {/* Heading Above Video */}
  
  <h2 className="footer-heading">OUR BESTSELLERS</h2>


  {/* Video Reels Section */}
  <div className="footer-video">
    {[reel1, reel2, reel3, reel4, reel5, reel6].map((video, index) => (
      <video
        key={index}
        width="317"
        autoPlay
        muted
        loop
        playsInline
        className="reel-video"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="Pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};
