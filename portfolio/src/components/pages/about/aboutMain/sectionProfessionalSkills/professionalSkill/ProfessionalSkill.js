import React from "react";

const ProfessionalSkill = (props) => {
  return (
    <div className="professional-skill">
      <span className="name">{props.skillName}</span>
      <div className="percent">
        <div className="outer-progress" style={props.outerWidth}>
          <div
            className={props.innerProgress}
            style={{ background: `linear-gradient(${props.skillBgColor})` }}
          ></div>
        </div>
      </div>
      <span className="value">{props.skillValue}</span>
    </div>
  );
};

export default ProfessionalSkill;
