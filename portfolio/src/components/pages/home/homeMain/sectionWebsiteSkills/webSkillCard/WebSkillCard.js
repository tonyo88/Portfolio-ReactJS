import React from "react";

const WebSkillCard = (props) => {
  return (
    <div className="web-skill-card-container">
      <div
        className="web-skill-image-container background-position"
        style={props.style}
      ></div>

      <div className="web-skill-info-container">
        <h1 className="web-skill-title">{props.webSkillTittle}</h1>
        <p className="web-skill-info">{props.webSkillInfo}</p>
      </div>
    </div>
  );
};

export default WebSkillCard;
