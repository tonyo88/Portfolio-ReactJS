import "./FooterMenu.css";
import React from "react";
import FooterMenuLink from "./footerMenuLink/FooterMenuLink";

const FooterMenu = () => {

  const footerLinks = [
    {
      footerLinkUrl: "/",
      footerLinkName: "Home"
    },
    {
      footerLinkUrl: "/",
      footerLinkName: "About"
    },
    {
      footerLinkUrl: "/pages/portfolio",
      footerLinkName: "Portfolio"
    },
    {
      footerLinkUrl: "/pages/contact",
      footerLinkName: "Contact"
    },
  ];
  

  const generateFooterLinks = (footerLinksArray) => (
    footerLinksArray.map((element, index) =>(
      <FooterMenuLink
       key = {index}
       footerLinkUrl = {element.footerLinkUrl}
       footerLinkName = {element.footerLinkName} 
       />
    )));
    return(
       <div className="footer-menu-container">
         <ul className="footer-menu">
           { generateFooterLinks(footerLinks) }
         </ul>
       </div>
    );
};
export default FooterMenu;