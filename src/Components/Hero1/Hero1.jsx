import React, { useEffect } from 'react';
import './Hero1.css';
import hero_icon from '../Assets/hero_icon.png';

export const Hero1 = () => {
  
  // Use effect to trigger fade-in effect on scroll
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="hero1">
      <div className="hero-center">
        <div className="hero-header1">
          <h1>
            <img src={hero_icon} alt="Hero Icon" />
          </h1>
          <h2></h2>
        </div>
        <div>
          <div className="hero1-text">
            <p className="fade-in">JUST IN</p>
            <p style={{ fontSize: "4.5rem", fontWeight: "bold" }} className="fade-in">NOTHING BEATS THE CITY</p>
            <p className="fade-in">Built to overcome anything the city throws your way.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
