import "./SocialLink.css";
import React from "react";


const SocialLink = (props) =>{

    return(
        <li className="social-list">
          <a href={props.socialUrl} target="_blank" rel="noopener noreferrer" className="social-link">
            <i className={props.socialIcon} aria-hidden="true"></i>
          </a>
       </li>

    );
};

export default SocialLink;