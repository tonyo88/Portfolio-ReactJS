import "./MainMenuLink.css";
import React from "react";
import {NavLink} from "react-router-dom";


const MainMenuLink = (props) => {

    return(
        <li onClick={props.closeMenu} className= "main-list">

             <NavLink
                exact
                to={props.mainLinkUrl}
                className={props.activeFixedNavLinkColor}
                activeClassName= {props.activeFixedNavMainLinkColorBorder}
                 >
                  {props.linkName}
                  <span className={props.activeFixedNavHoverBackColor}></span>
                  <span className={props.activeFixedNavHoverBackColor}></span>
                  <span className={props.activeFixedNavHoverBackColor}></span>
                  <span className={props.activeFixedNavHoverBackColor}></span>
             </NavLink>
        </li>
    );

}

export default MainMenuLink;