import "./MainMenuLink.css";
import React from "react";
import { NavLink } from "react-router-dom";

const MainMenuLink = (props) => {
  return (
    <li onClick={props.closeMenu} className="main-list">
      <NavLink
        exact
        to={props.mainLinkUrl}
        className={props.mainLinkColor}
        activeClassName={props.activeClassName}
      >
        {props.mainLinkName}
        <span className={props.mainLinkHover}></span>
        <span className={props.mainLinkHover}></span>
        <span className={props.mainLinkHover}></span>
        <span className={props.mainLinkHover}></span>
      </NavLink>
    </li>
  );
};

export default MainMenuLink;
