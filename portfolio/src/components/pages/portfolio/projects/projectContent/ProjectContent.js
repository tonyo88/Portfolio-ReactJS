import "./ProjectContent.css";
import React from "react";
import ProjectHeader from "./projectHeader/ProjectHeader";
import ProjectInfo from "./projectInfo/ProjectInfo";
import TechnologiesInfo from "./technologiesInfo/TechnologiesInfo";

const ProjectContent = (props) =>{
 
         const technologieSkills = [{
            skillName: `${props.technologieSkillName}`
            },{
            skillName: `${props.technologieSkillName}`
            },{
            skillName: "qQuery"
            },{
            skillName: "ADsa"
         }];
  
    return(

        <div className="wrapper">
          <div className="project-container">
             <ProjectHeader 
                projectTitle={props.projectTitleName}
                projectLogo={props.projectLogoImg}
                projectAlt={props.projectLogoImgAlt}
             />

             <ProjectInfo info={props.projectInfo} />
            
             <TechnologiesInfo skillsArray={technologieSkills} />
          </div>
        </div>
        
    );

};

export default ProjectContent;