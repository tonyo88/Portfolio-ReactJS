import "./FooterMenu.css";
import React from "react";
import FooterMenuLink from "./footerMenuLink/FooterMenuLink";

const FooterMenu = () => {
    return(
       <div className="footer-menu-container">
         <ul className="footer-menu">
             <FooterMenuLink footerLinkUrl={"/"} footerLinkName={"Home"} />
             <FooterMenuLink footerLinkUrl={"/pages/about"} footerLinkName={"About"} />
             <FooterMenuLink footerLinkUrl={"/pages/portfolio"} footerLinkName={"Portfolio"} />
             <FooterMenuLink footerLinkUrl={"/pages/contact"} footerLinkName={"Contact"} />
         </ul>
       </div>
    );
};
export default FooterMenu;