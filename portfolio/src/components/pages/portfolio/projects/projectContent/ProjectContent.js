import "./ProjectContent.css";

import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import ProjectHeader from "./projectHeader/ProjectHeader";
import ProjectMain from "./projectMain/ProjectMain";
import ProjectFooter from "./projectFooter/ProjectFooter";

class ProjectContent extends React.Component {
  render () {
  
    return(
       <section id={this.props.id} className="project-section">
         <ScrollAnimation animateIn='fadeInLeft' duration={1.2} animateOnce={true}>
              <div className="wrapper">
                <div className="project-container">

                  <ProjectHeader 
                    projectTitle={this.props.projectTitleName}
                    projectLogo={this.props.projectLogoImg}  
                    projectAlt={this.props.projectLogoImgAlt}
                  />

                  <ProjectMain 
                    sliderImagesArray={this.props.imageSlider}
                    projectInfo={this.props.projectContentInfo}
                    projectSkills={this.props.projectContentSkills}
                  />

                  <ProjectFooter
                    projectUrl={this.props.projectContentUrl}
                  />            
                </div>
              </div>
          </ScrollAnimation>
        </section>
        
    );
  };
};

export default ProjectContent;