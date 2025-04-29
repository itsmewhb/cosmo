import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <p>FLOWER KNOWS</p>
        </div>
        <ul className="footer-links">     
            <li><a href="/about">About Us </a></li>
        
            
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
  )
}

