import React, { useRef, useState, useContext } from "react";
import "./Navbar.css";
import color from "../../constants/color.ts";
import cart_icon from "../Assets/cart_icon1.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { ShopContext } from "../../Context/ShopContext"; // Import ShopContext

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const { getTotalCartQuantity } = useContext(ShopContext); // Access getTotalCartQuantity from ShopContext
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <span>FLOWER KNOWS</span>
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li className="navshop" onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none", color: color.white }} to="/">
            HOME
          </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li className="navmakeup" onClick={() => setMenu("makeup")}>
          <Link style={{ textDecoration: "none", color: color.white }} to="/face">
            FACE
          </Link>
          {menu === "makeup" ? <hr /> : null}
        </li>
        <li className="navaccessories" onClick={() => setMenu("accessories")}>
          <Link style={{ textDecoration: "none", color: color.white }} to="/eyes">
            EYES
          </Link>
          {menu === "accessories" ? <hr /> : null}
        </li>
        <li className="navcollections" onClick={() => setMenu("collections")}>
          <Link style={{ textDecoration: "none", color: color.white }} to="/lips">
            LIPS
          </Link>
          {menu === "collections" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="nav-logout-btn">
            LOG OUT
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="nav-signup-btn">SIGN UP</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartQuantity()}</div> {/* Show cart quantity */}
      </div>
    </div>
  );
};
