import "./ProjectsNavBar.css";
import React from "react";
import ProjectsTitle from "./projectsTitle/ProjectsTittle";
import ProjectsMenu from "./projectsMenu/ProjectsMenu";
import ProjectsMobileMenuBtn from "./projectsMobileMenuBtn/ProjectsMobileMenuBtn";

class ProjectsNavBar extends React.Component {
  state = {
    isSideMenuOpen: false,
  };

  openProjectsMenu = () => {
    this.setState((prevState) => {
      return {
        isSideMenuOpen: !prevState.isSideMenuOpen,
      };
    });
  };

  closeProjectsMenu = () => {
    this.setState({ isSideMenuOpen: false });
  };

  render() {
    return (
      <nav
        className={
          this.state.isSideMenuOpen
            ? "projects-nav-bar active-projects-nav-bar"
            : "projects-nav-bar"
        }
      >
        <div className="wrapper">
          <ProjectsTitle projectsTitle={this.props.projectsTitle} />
          <ProjectsMenu
            projectLinks={this.props.projectLinks}
            closeSideMenu={this.closeProjectsMenu}
          />
          <ProjectsMobileMenuBtn
            openSideMenu={this.openProjectsMenu}
            className={
              this.state.isSideMenuOpen ? "fa-arrow-right" : "fa-arrow-left"
            }
          />
        </div>
      </nav>
    );
  }
}

export default ProjectsNavBar;
