import "./Logo.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo-portfolio.png";

const Logo = (props) => {
  return (
    <div className="logo-container">
      <Link to="/" className="logo-link" onClick={props.closeMenu}>
        <div className="logo-image">
          <img src={logo} alt="logo" />
        </div>
        <div className={props.className}>
          <div className="logo-name-container">
            <h5>Anthony Vanov</h5>
            <p>Developer // Designer</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
