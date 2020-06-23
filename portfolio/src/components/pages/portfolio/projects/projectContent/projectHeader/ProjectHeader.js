import "./ProjectHeader.css";
import React from "react";

const ProjectHeader = (props) => {
  return(
      <header id="project-header">         
          <div id="project-logo">
            <img src={props.projectLogo} alt={props.projectAlt}></img>
          </div>
          
          <h1 id="project-title">{props.projectTitle}</h1>
      </header>
  );
};

export default ProjectHeader;