import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo-portfolio.png";

const FooterLogo = () => {
  return (
    <div className="footer-logo ">
      <Link to="/">
        <img src={logo} alt={logo}></img>
      </Link>
    </div>
  );
};

export default FooterLogo;
