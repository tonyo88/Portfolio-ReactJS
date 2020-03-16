import "./ProjectHeader.css";
import React from "react";

const ProjectHeader = (props) => {
  return(
      <header className="project-header">
         <h1 className="project-title">{props.projectTitle}</h1>
         <div className="project-logo">
           <img src={props.projectLogo} alt={props.projectAlt} ></img>  
         </div>

      </header>
  );
};

export default ProjectHeader;