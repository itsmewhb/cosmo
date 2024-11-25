import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is one that allows people to buy and sell physical goods,
             services, and digital products over the internet rather than at a brick-and-mortar 
             location. Through an e-commerce website, a business can process orders, accept 
             payments, manage shipping and logistics, and provide customer service.</p>
             <p>
             Ecommerce or "electronic commerce" is the trading of goods and services online. 
             The internet allows individuals and businesses to buy and sell an increasing 
             amount of physical goods, digital goods, and services electronically.
             </p>
        </div>
    </div>
  )
}
