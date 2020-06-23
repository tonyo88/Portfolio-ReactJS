import "./WebSkills.css";
import React from "react";
import WebSkillCard from "./webSkillCard/WebSkillCard";

const WebSkills = ( { webSkillsArray } ) => {

        const generateWebSkills = () => (
            webSkillsArray.map((element, index) => (
             <WebSkillCard 
               key = {index}
               style = {element.style}
               webSkillTittle = {element.webSkillTittle}
               webSkillInfo = {element.webSkillInfo}
             />
            )));
      
        return(
            <div className="wrapper">
                <div className="container-web-skills spacing">
                    { generateWebSkills() }                       
                </div>
            </div>
        );
};

export default WebSkills;