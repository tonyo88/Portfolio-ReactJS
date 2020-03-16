import "./PersonalSkill.css";
import React from "react";

const PersonalSkill = (props)=> {

    return(
        <div className="personal-skill-card">
           <div className= "personal-skill-box">
              <div className="personal-skill-percent">
                  <svg>
                    <circle cx="70" cy="70" r="70" className="circle-outer"></circle>
                    <circle cx="70" cy="70" r="70" className={"circle-progress circle-progress-" + props.responsibleProgress}></circle>
                  </svg>
                  <div className="personal-skill-value">
                      <h2>{props.personalSkillValue}<span>%</span></h2>
                  </div>
              </div>
              <h2 className="personal-skill-name">{props.personalSkillName}</h2>
           </div>
        </div>
    );
};

export default PersonalSkill;