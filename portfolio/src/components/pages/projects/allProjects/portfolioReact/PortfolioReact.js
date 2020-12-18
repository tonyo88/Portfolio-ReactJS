import React from "react";
import ProjectContent from "../../projectContent/ProjectContent";

import PortfolioReactLogo from "../../../../../assets/logo/logo-portfolio.png";
import prHome from "../../../../../assets/pages/projects/portfolio-react/image-slider/portfolio-react-home.png";
import prWsSkills from "../../../../../assets/pages/projects/portfolio-react/image-slider/portfoloio-react-website-skills.png";
import prAbout from "../../../../../assets/pages/projects/portfolio-react/image-slider/portfolio-react-about.png";
import prPortfolio from "../../../../../assets/pages/projects/portfolio-react/image-slider/portfolio-react-portfolio.png";
import prContact from "../../../../../assets/pages/projects/portfolio-react/image-slider/portfolio-react-contact.png";

const PortfolioReact = () => {
  const imagesProjectSlider = [
    { img: `${prHome}` },
    { img: `${prWsSkills}` },
    { img: `${prAbout}` },
    { img: `${prPortfolio}` },
    { img: `${prContact}` },
  ];

  const technologieSkills = [
    { skillName: "HTML5 - semantic" },
    { skillName: "CSS3 - SASS, Grid Layout, SVG" },
    { skillName: "React Js" },
    { skillName: "React Router" },
    { skillName: "React Libraries" },
    { skillName: "Axios" },
    { skillName: "Asynchronous Operations" },
    { skillName: "Webpack" },
    { skillName: "UI/UX Architecture" },
    { skillName: "UI/UX Animations" },
    { skillName: "Responsive Design" },
    { skillName: "Visual Studio Code" },
    { skillName: "Adobe Photoshop" },
  ];

  return (
    <ProjectContent
      id={"portfolio-react"}
      projectTitle={"Portfolio - ReactJS"}
      projectLogo={PortfolioReactLogo}
      imageSlider={imagesProjectSlider}
      projectInfo={
        "The project was created entirely with React Framework. The goal of this project is to create a dynamic content that demonstrates skills in working with React.js and its libraries and communication between components."
      }
      projectSkills={technologieSkills}
      projectUrl={"https://github.com/tonyo88/Portfolio-ReactJS"}
    />
  );
};

export default PortfolioReact;
