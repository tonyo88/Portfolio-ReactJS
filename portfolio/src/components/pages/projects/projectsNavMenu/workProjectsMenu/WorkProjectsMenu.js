import React from "react";
import ProjectsNavBar from "../projectsNavBar/ProjectsNavBar";

const WorkProjectsMenu = () => {
  const workProjects = [
    {
      prejectUrl: "/pages/portfolio/cosmos",
      projectLinkName: "Cosmos",
    },
    {
      prejectUrl: "/pages/portfolio/i-am",
      projectLinkName: "I-AM",
    },
    {
      prejectUrl: "/pages/portfolio/led-svetlini",
      projectLinkName: "Led Svetlini",
    },
    {
      prejectUrl: "/pages/portfolio/movie-in-hand",
      projectLinkName: "Movie in Hand",
    },
  ];
  return (
    <ProjectsNavBar
      projectsTitle="< Work Projects />"
      projectLinks={workProjects}
    />
  );
};

export default WorkProjectsMenu;
