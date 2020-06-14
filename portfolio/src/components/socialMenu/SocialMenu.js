import "./SocialMenu.css";
import React from "react";
import SocialLink from "./socialLink/SocialLink";

const SocialMenu = ({ linksArray }) =>{

    const generateSocialLinks = () => (

        linksArray.map((element, index) => (
            <SocialLink 
            key = {index}
            socialUrl = {element.socialUrl}
            socialIcon = {element.socialIcon}
            />)));

    return(
             <ul className="social-menu">
                 { generateSocialLinks()}                
             </ul>
    );
}


export default SocialMenu;