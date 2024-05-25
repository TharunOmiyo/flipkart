// src/components/Header/Header.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUserCircle,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="header">
      <div className="top-row">
        <div className="brand">
          <h1>eStore</h1>
        </div>
        <div className="inp-container">
          <div className="dropdown">
            <select className="select-btn">
              <option value="">Men</option>
              <option value="">Women</option>
              <option value="">Kids</option>
            </select>
          </div>
          <input className="form-control" type="text" placeholder="Enter" />
          <button>
            <span role="img" aria-label="search">
              🔍
            </span>
          </button>
        </div>
        <div className="login-register">
          <span role="img" aria-label="user" className="user-icon">
            👤
          </span>
          <h5>Google</h5>
        </div>
        <div className="cart-wishlist">
          <ul>
            <li className="list-icon">
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </li>
            <Link to="/cart">
              <li className="list-icon">
                <span role="img" aria-label="cart">
                  🛒
                </span>
                {/* {cartItemCount !== 0 ? (
                  <div className="cart-item-count">
                    <p>{cartItemCount}</p>
                  </div>
                ) : null} */}
                0
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
