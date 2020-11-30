import "./FooterContent.css";
import React from "react";
import FooterMenu from "./footerMenu/FooterMenu";
import FooterContact from "./footerContact/FooterContact";

const FooterContent = () => {
  return (
    <div className="footer-content">
      <FooterMenu />
      <FooterContact />
    </div>
  );
};

export default FooterContent;
