import "./WebSkillCard.css";
import React from "react";

const WebSkillImage = (props) => {
   
    return(
        <div className="web-skill-card-container">

            <div className="web-skill-image-container" style = {props.style} ></div>

            <div className="web-skill-info-container">
                <h1 className="web-skill-title">{props.webSkillTittle}</h1>
                <p className="web-skill-info">{props.webSkillInfo}</p>
            </div>

        </div>
    );
};

export default WebSkillImage;