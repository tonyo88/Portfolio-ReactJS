import "./Footer.css";
import React from "react";
import FooterLogo from "./footerLogo/FooterLogo";
import FooterContent from "./footerContent/FooterContent";
import CopyRight from "./copyRight/CopyRight";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <FooterLogo />
        <FooterContent />
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
