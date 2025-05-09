import React, { useEffect } from 'react';
import './Hero1.css';
import hero_icon from '../Assets/homevid.mp4';

export const Hero1 = () => {
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
            <video autoPlay loop muted className="hero-video">
              <source src={hero_icon} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </h1>
        </div>
        <div>
          <div className="hero1-text">
            <p className="fade-in">IN FLOWER KNOWS</p>
            <p style={{ fontSize: "4.5rem", fontWeight: "bold" }} className="fade-in">
              BEAUTY MEETS CONFIDENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
