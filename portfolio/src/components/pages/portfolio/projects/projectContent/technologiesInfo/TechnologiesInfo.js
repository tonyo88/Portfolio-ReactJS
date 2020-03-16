import "./TechnologiesInfo.css";
import React from "react";
import TechnologieSkill from "./technologieSkill/TechnologieSkill";

const TechnologiesInfo = ( { skillsArray } ) => {

   const generateTechnologieSkills = () =>{
     let skills = [];
     let skillCounter= 0;

     skillsArray.forEach(element => {
        skills.push(<TechnologieSkill
        key = {skillCounter++}
        skill = {element.skillName}
      />);
     });

  return skills;


   };
  
    return(
        <div className="technologies-info">
          <h2>Technologies</h2>
          <h3>Code technologies I got involved with while working on this project.</h3>
          <ul className="skill-techniques">
            {generateTechnologieSkills ()}
          </ul>
        </div>
    );
};

export default TechnologiesInfo;