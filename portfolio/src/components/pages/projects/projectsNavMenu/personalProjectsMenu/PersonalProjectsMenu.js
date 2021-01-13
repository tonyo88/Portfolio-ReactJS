import React from "react";
import ProjectsNavBar from "../projectsNavBar/ProjectsNavBar";

const PersonalProjectsMenu = () => {
  const personalProjects = [
    {
      prejectUrl: "/pages/portfolio/portfolio-react",
      projectLinkName: "Portfolio-React.JS",
    },
    {
      prejectUrl: "/pages/portfolio/portfolio-js",
      projectLinkName: "Portfolio-JS",
    },
    {
      prejectUrl: "/pages/portfolio/weather-app",
      projectLinkName: "Weather App",
    },
    {
      prejectUrl: "/pages/portfolio/little-barber",
      projectLinkName: "Little Barber",
    },
    {
      prejectUrl: "/pages/portfolio/memory-game",
      projectLinkName: "Memory Game",
    },
  ];
  return (
    <ProjectsNavBar
      projectsTitle="< Personal Projects />"
      projectLinks={personalProjects}
    />
  );
};

export default PersonalProjectsMenu;
