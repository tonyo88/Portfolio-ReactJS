import "./ProjectHeader.css";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const ProjectHeader = (props) => {
  return(
      <header className="project-header">         
          <ScrollAnimation className="project-logo" animateIn='rotateIn' duration={1} animateOnce={true} delay={800}>
            <img src={props.projectLogo} alt={props.projectAlt} ></img>  
          </ScrollAnimation>
          
          <h1 className="project-title">{props.projectTitle}</h1>
      </header>
  );
};

export default ProjectHeader;