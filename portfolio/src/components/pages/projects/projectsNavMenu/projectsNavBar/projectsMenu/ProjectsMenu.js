import React from "react";
import ProjectsList from "./projectsList/ProjectsList";

const ProjectsMenu = (props) => {
  const generateProjectLinks = (projectsLinksArray) =>
    projectsLinksArray.map((element, index) => (
      <ProjectsList
        key={index}
        prejectUrl={element.prejectUrl}
        projectLinkName={element.projectLinkName}
        closeSideMenu={props.closeSideMenu}
      />
    ));
  return (
    <div className="projects-menu-container">
      <ul className="projects-menu">
        {generateProjectLinks(props.projectLinks)}
      </ul>
    </div>
  );
};

export default ProjectsMenu;
