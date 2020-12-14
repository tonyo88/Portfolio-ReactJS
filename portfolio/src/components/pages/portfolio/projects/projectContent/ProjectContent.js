import "./ProjectContent.css";

import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import ProjectHeader from "./projectHeader/ProjectHeader";
import ProjectMain from "./projectMain/ProjectMain";
import ProjectFooter from "./projectFooter/ProjectFooter";

const ProjectContent = (props) => {
  return (
    <section id={props.id} className="project-section">
      <ScrollAnimation animateIn="fadeInLeft" duration={1.2} animateOnce={true}>
        <div className="wrapper">
          <div className="project-container">
            <ProjectHeader
              projectTitle={props.projectTitleName}
              projectLogo={props.projectLogoImg}
              projectAlt={props.projectLogoImgAlt}
            />

            <ProjectMain
              sliderImagesArray={props.imageSlider}
              projectInfo={props.projectContentInfo}
              projectSkills={props.projectContentSkills}
            />

            <ProjectFooter projectUrl={props.projectContentUrl} />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ProjectContent;
