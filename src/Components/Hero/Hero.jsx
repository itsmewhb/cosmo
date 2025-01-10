import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'

export const Hero = () => {
    return (
        <div className="hero">
          <div className="hero-center">
            <div className="hero-header"></div>
            <div>
              <div className="hero-text-icon">
                <h1>
                  <span>I</span>
                  <span>-</span>
                  <span>H</span>
                  <span>U</span>
                  <span>B</span>
                  <h1>
                  <span>C</span>
                  <span>O</span>
                  <span>L</span>
                  <span>L</span>
                  <span>E</span>
                  <span>C</span>
                  <span>T</span>
                  <span>I</span>
                  <span>O</span>
                  <span>N</span>
                  </h1>
                </h1>
              </div>
            </div>
            <div className="hero-latest-btn">
              <div>Latest Collection</div>
              <img src={arrow_icon} alt="Arrow Icon" />
            </div>
          </div>
        </div>
      );
}
