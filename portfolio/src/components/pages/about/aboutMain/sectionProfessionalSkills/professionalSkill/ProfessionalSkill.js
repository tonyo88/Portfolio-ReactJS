import "./ProfessionalSkill.css";
import React from "react";

const ProfessionalSkill = (props) =>{
  return(

     <div className="professional-skill">
          <span className="name">{props.skillName}</span>
          <div className="percent">
              <div className="outer-progress" id={props.outerValue}>
                <div className={props.innerProgress} id={props.bgInner}></div>
              </div>
          </div>
          <span className="value">{props.skillValue}</span>
     </div>
  );
};

export default ProfessionalSkill;