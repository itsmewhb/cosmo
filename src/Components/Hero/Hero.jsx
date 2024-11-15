import React from 'react'
import './Hero.css'
import text_icon from '../Assets/text_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    
    <div className='hero'>
    <div className="hero-center">
    <div className="hero-header">
            <h1>
            <img src={hero_image} alt="" />
            </h1>
            <h2></h2>
        </div>
        <div>
            <div className="hero-text-icon">
                <img src={text_icon} alt="" />
            </div>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
       </div>
        
    </div>
  )
}
