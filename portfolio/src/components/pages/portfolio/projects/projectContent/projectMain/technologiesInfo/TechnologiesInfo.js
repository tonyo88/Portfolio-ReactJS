import "./TechnologiesInfo.css";
import React from "react";
import TechnologieSkill from "./technologieSkill/TechnologieSkill";

const TechnologiesInfo = ({ skillsArray }) => {
  const generateTechnologieSkills = () =>
    skillsArray.map((element, index) => (
      <TechnologieSkill key={index} skill={element.skillName} />
    ));

  return (
    <div className="technologies-info">
      <h2>Technologies</h2>
      <h3>
        Code technologies I got involved with while working on this project.
      </h3>
      <ul className="skill-techniques">{generateTechnologieSkills()}</ul>
    </div>
  );
};

export default TechnologiesInfo;
