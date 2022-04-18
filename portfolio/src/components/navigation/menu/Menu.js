import "./Menu.css";
import React from "react";
import SocialMenu from "../../socialMenu/SocialMenu";
import MainMenuLink from "./mainMenuLink/MainMenuLink";

const Menu = (props) => {
  const mainLinks = [
    {
      mainLinkUrl: "/",
      mainLinkName: "Home",
    },
    {
      mainLinkUrl: "/pages/about",
      mainLinkName: "About",
    },
    {
      mainLinkUrl: "/pages/portfolio",
      mainLinkName: "Portfolio",
    },
    {
      mainLinkUrl: "/pages/contact",
      mainLinkName: "Contact",
    },
  ];

  const generateMainLinks = (mainLinksArray) =>
    mainLinksArray.map((element, index) => (
      <MainMenuLink
        key={index}
        mainLinkUrl={element.mainLinkUrl}
        mainLinkName={element.mainLinkName}
        closeMenu={props.closeMenu}
        mainLinkColor={props.mainLinkColor}
        mainLinkHover={props.mainLinkHover}
        activeClassName={props.activeClassName}
      />
    ));

  const socialLinks = [
    {
      socialUrl: "https://www.facebook.com/",
      socialIcon: "fa fa-facebook",
    },
    {
      socialUrl: "https://www.linkedin.com/in/tonyo-vanov/",
      socialIcon: "fa fa-linkedin",
    },
    {
      socialUrl: "https://github.com/tonyo88",
      socialIcon: "fa fa-github",
    },
    {
      socialUrl:
        "https://www.youracclaim.com/badges/50bed4f8-3ced-4969-ba18-baef88cc05d3/linked_in_profile",
      socialIcon: "fa fa-windows",
    },
    {
      socialUrl: "mailto:tonyo_vanov@yahoo.com",
      socialIcon: "fa fa-envelope",
    },
  ];

  return (
    <div className={props.showNav}>
      <div className="main-menu-container">
        <ul className="main-menu">{generateMainLinks(mainLinks)}</ul>
        <div className="mobile-social">
          <SocialMenu linksArray={socialLinks} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
