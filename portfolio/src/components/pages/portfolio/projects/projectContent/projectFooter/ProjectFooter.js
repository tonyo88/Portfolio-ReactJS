import "./ProjectFooter.css";

import React from "react";
import ProjectSrcButton from "./projectSrcButton/ProjectSrcButton";
import BackToPortfolioBtn from "./backToPortfolioBtn/BackToPortfolioBtn";

const ProjectFooter = (props) =>{
   
    return(
        <footer id="project-footer">
           <BackToPortfolioBtn />
           <ProjectSrcButton url={props.projectUrl} />
        </footer>
    );
};

export default ProjectFooter;