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
              projectTitle={props.projectTitle}
              projectLogo={props.projectLogo}
            />
            <ProjectMain
              sliderImagesArray={props.imageSlider}
              projectInfo={props.projectInfo}
              projectSkills={props.projectSkills}
            />
            <ProjectFooter projectUrl={props.projectUrl} />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ProjectContent;
