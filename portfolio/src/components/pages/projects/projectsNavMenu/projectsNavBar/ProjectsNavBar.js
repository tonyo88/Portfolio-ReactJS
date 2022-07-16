import "./ProjectsNavBar.css";
import React, { useState } from "react";
import ProjectsTitle from "./projectsTitle/ProjectsTittle";
import ProjectsMenu from "./projectsMenu/ProjectsMenu";
import ProjectsMobileMenuBtn from "./projectsMobileMenuBtn/ProjectsMobileMenuBtn";

const ProjectsNavBar = (props) => {
  const [sideMenu, setSideMenu] = useState(false);

  const openSideMenu = () => {
    setSideMenu(!sideMenu);
  };
  const closeSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <nav
      className={
        sideMenu
          ? "projects-nav-bar active-projects-nav-bar"
          : "projects-nav-bar"
      }
    >
      <div className="wrapper">
        <ProjectsTitle projectsTitle={props.projectsTitle} />
        <ProjectsMenu
          projectLinks={props.projectLinks}
          closeSideMenu={closeSideMenu}
        />
        <ProjectsMobileMenuBtn
          openSideMenu={openSideMenu}
          className={sideMenu ? "fa-arrow-right" : "fa-arrow-left"}
        />
      </div>
    </nav>
  );
};

export default ProjectsNavBar;
