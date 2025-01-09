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
              <span>I-HUB COLLECTION</span>
        </div> 
        <ul ref={menuRef} className="nav-menu">
            <li className="navshop" onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none', color: color.white }}to='/'>SHOP</Link> {menu==="shop"?<hr/>:<></>} </li>
            <li className="navmen" onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:'none', color: color.white }}to='/mens'>MEN</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li className="navwomen" onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration:'none', color: color.white }}to='/womens'>WOMEN</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li className="navkid" onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:'none', color: color.white }}to='/kids'>KIDS</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login' style={{textDecoration:'none'}}>
            <button>LOGIN</button>
            </Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
