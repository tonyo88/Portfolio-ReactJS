import React from "react";
import ProjectSlider from "./projectSlider/ProjectSlider";
import ProjectInfo from "./projectInfo/ProjectInfo";
import TechnologiesInfo from "./technologiesInfo/TechnologiesInfo";


class ProjectMain extends React.Component {

    render() {
     return(
         <main id="project-main">
             <ProjectSlider imagesArray={this.props.sliderImagesArray} />
             <ProjectInfo info={this.props.projectInfo} />
             <TechnologiesInfo skillsArray={this.props.projectSkills}  />
         </main>
      );
    };
};
export default ProjectMain;