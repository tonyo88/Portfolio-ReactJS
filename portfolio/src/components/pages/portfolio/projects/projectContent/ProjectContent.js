import "./ProjectContent.css";

import React from "react";
import ProjectHeader from "./projectHeader/ProjectHeader";
import ProjectMain from "./projectMain/ProjectMain";
import ProjectFooter from "./projectFooter/ProjectFooter";

class ProjectContent extends React.Component {
  render () {
  
    return(

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
        
    );
  };
};

export default ProjectContent;