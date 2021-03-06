import "./ProjectMain.css";
import React from "react";
import ProjectSlider from "./projectSlider/ProjectSlider";
import ProjectInfo from "./projectInfo/ProjectInfo";
import TechnologiesInfo from "./technologiesInfo/TechnologiesInfo";

const ProjectMain = (props) => {
  return (
    <div id="project-main">
      <ProjectSlider imagesArray={props.sliderImagesArray} />
      <ProjectInfo info={props.projectInfo} />
      <TechnologiesInfo skillsArray={props.projectSkills} />
    </div>
  );
};

export default ProjectMain;
