import "./Nav.css";
import React, { useState } from "react";
import Logo from "./logo/Logo";
import ToggleButton from "./toggleButton/ToggleButton";
import Menu from "./menu/Menu";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const fixedNav = () => {
    if (window.scrollY >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", fixedNav);
  const openMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <nav className={scrolled ? "navigation active-fixed-nav" : "navigation"}>
      <div className="wrapper">
        <ToggleButton
          className={menu ? "line active-toggle-btn" : "line"}
          openMenu={openMenu}
        />
        <Logo
          closeMenu={closeMenu}
          className={scrolled ? "logo-name fixed-logo" : "logo-name"}
        />
        <Menu
          showNav={menu ? "main-nav show-nav" : "main-nav"}
          mainLinkColor={scrolled ? "main-link fixed-main-link" : "main-link"}
          mainLinkHover={
            scrolled ? "hover-effect fixed-hover-effect" : "hover-effect"
          }
          activeClassName={
            scrolled
              ? "active-main-link fixed-active-main-link"
              : "active-main-link"
          }
          closeMenu={closeMenu}
        />
      </div>
    </nav>
  );
};

export default Nav;
