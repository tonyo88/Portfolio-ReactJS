import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const PersonalSkill = (props) => {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      duration={1}
      delay={props.delay}
      animateOnce={true}
    >
      <div className="personal-skill-card flex-middle">
        <div className="personal-skill-box">
          <div className="personal-skill-percent">
            <svg>
              <circle cx="70" cy="70" r="70" className="circle-outer"></circle>
              <circle
                cx="70"
                cy="70"
                r="70"
                className={
                  "circle-progress circle-progress-" + props.responsibleProgress
                }
              ></circle>
            </svg>
            <div className="personal-skill-value">
              <h2>
                {props.personalSkillValue}
                <span>%</span>
              </h2>
            </div>
          </div>
          <h2 className="personal-skill-name">{props.personalSkillName}</h2>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default PersonalSkill;
