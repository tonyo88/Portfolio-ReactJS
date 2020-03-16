import "./SocialMenu.css";
import React from "react";
import SocialLink from "./socialLink/SocialLink";

const SocialMenu = ({ linksArray }) =>{

    const generateSocialLinks = () => {

        let ele = [];
        let counter = 0;

        linksArray.forEach(element => {
            ele.push(<SocialLink
            key={counter++}
            socialUrl= {element.url}
            socialIcon= {element.icon}
            />);
        });

        return ele;
    }

    return(
             <ul className="social-menu">
                 { generateSocialLinks()}                
             </ul>
    );
}


export default SocialMenu;