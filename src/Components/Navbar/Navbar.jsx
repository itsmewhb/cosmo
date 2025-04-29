import React, { useRef, useState, useContext } from "react";
import "./Navbar.css";
import color from "../../constants/color.ts"; // Kept TypeScript import
import cart_icon from "../Assets/cart_icon1.png";
import { Link } from "react-router-dom";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const { getTotalCartQuantity } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <span>FLOWER KNOWS</span>
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li className="navshop" onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none", color: color.white }} to="/">HOME</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li className="navmakeup" onClick={() => setMenu("makeup")}>
          <Link style={{ textDecoration: "none", color: color.white }} to="/face">FACE</Link>
          {menu === "makeup" ? <hr /> : <></>}
        </li>
        <li className="navaccessories" onClick={() => setMenu("accessories")}>
          <Link style={{ textDecoration: "none", color: color.white }} to="/eyes">EYES</Link>
          {menu === "accessories" ? <hr /> : <></>}
        </li>
        <li className="navcollections" onClick={() => setMenu("collections")}>
          <Link style={{ textDecoration: "none", color: color.white }} to="/lips">LIPS</Link>
          {menu === "collections" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button>SIGN UP</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartQuantity()}</div>
      </div>
    </div>
  );
};