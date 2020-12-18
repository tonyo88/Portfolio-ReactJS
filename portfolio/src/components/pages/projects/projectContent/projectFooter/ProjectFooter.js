import "./ProjectFooter.css";
import React from "react";
import ProjectSrcButton from "./projectSrcButton/ProjectSrcButton";
import BackToPortfolioBtn from "./backToPortfolioBtn/BackToPortfolioBtn";

const ProjectFooter = (props) => {
  return (
    <div id="project-footer">
      <BackToPortfolioBtn />
      <ProjectSrcButton url={props.projectUrl} />
    </div>
  );
};

export default ProjectFooter;
