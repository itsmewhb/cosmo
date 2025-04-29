import React, { useRef, useState } from 'react'
import './Navbar.css'
import color from '../../constants/color.ts'
import cart_icon from '../Assets/cart_icon1.png'
import { Link } from 'react-router-dom'
import nav_dropdown from "../Assets/nav_dropdown.png"; 

export const Navbar = () => {

      const [menu,setMenu]= useState("shop")
      const menuRef = useRef(); 

      

  return (
    <div className='navbar'> 
        <div className="nav-logo">
              <span>FLOWER KNOWS</span>
        </div> 
        <ul ref={menuRef} className="nav-menu">
            <li className="navshop" onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none', color: color.white }}to='/'>HOME</Link> {menu==="shop"?<hr/>:<></>} </li>
            <li className="navmakeup" onClick={()=>{setMenu("makeup")}}><Link style={{ textDecoration:'none', color: color.white }}to='/face'>FACE</Link> {menu==="makeup"?<hr/>:<></>}</li>
            <li className="navaccessories" onClick={()=>{setMenu("accessories")}}><Link style={{ textDecoration:'none', color: color.white }}to='eyes'>EYES</Link> {menu==="accessories"?<hr/>:<></>}</li>
            <li className="navcollections" onClick={()=>{setMenu("collections")}}><Link style={{ textDecoration:'none', color: color.white }}to='/lips'>LIPS</Link> {menu==="collections"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login' style={{textDecoration:'none'}}>
            <button>SIGN UP</button>
            </Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">1</div>
        </div>
    </div>
  )
}
