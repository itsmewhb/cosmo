import React from 'react'
import './Hero1.css'
import text_icon from '../Assets/text_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_icon from '../Assets/hero_icon.png'

export const Hero1 = () => {
  return (
    <div className='hero1'>
    <div className="hero-center">
    <div className="hero-header1">
            <h1>
            <img src={hero_icon} alt="" />
            </h1>
            <h2></h2>
        </div>
        <div>
            <div className="hero1-text"> 
                <p>Just In</p>
                <p1>NOTHING BEATS THE CITY</p1>
                <p>Built to overcome anything the city throws your way.</p>
            </div>
        </div>
       </div>
        
    </div>
  )
}
