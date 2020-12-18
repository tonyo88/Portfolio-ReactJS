import "./ProjectHeader.css";
import React from "react";

const ProjectHeader = (props) => {
  return (
    <div id="project-header">
      <div className="project-logo flex-middle">
        <img src={props.projectLogo} alt={props.projectLogo}></img>
      </div>
      <h1 className="project-title">{props.projectTitle}</h1>
    </div>
  );
};

export default ProjectHeader;
