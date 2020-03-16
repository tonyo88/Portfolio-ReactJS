import "./Logo.css";
import React from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/logo/logo-portfolio.png";

const Logo = (props) =>{
  return(
    <Link to="/" className="logo-link">
      <div className="logo-container" onClick={props.closeMenu}> 
          <div className='logo-image'> 
              <img src={logo} alt="logo" />
          </div>
          <div className={props.className}>
              <div className="logo-name-container">
                  <h5>Tonyo Vanov</h5>
                  <p>Developer // Designer</p>
              </div>
          </div>
      </div>
    </Link>
  );
};

export default Logo;