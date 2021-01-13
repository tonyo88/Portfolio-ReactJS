import React from "react";
import ProjectContent from "../../../projectContent/ProjectContent";
import PersonalProjectsMenu from "../../../projectsNavMenu/personalProjectsMenu/PersonalProjectsMenu";

import PortfolioJsLogo from "../../../../../../assets/logo/logo-portfolio.png";
import pjsHome from "../../../../../../assets/pages/projects/portfolio-js/image-slider/portfolio-js-home.png";
import pjsSkills from "../../../../../../assets/pages/projects/portfolio-js/image-slider/portfolio-js-skills.png";
import pjsPortfolio from "../../../../../../assets/pages/projects/portfolio-js/image-slider/portfolio-js-portf.png";
import pjsContact from "../../../../../../assets/pages/projects/portfolio-js/image-slider/portfolio-js-contact.png";

const PortfolioJs = () => {
  const imagesProjectSlider = [
    { img: `${pjsHome}` },
    { img: `${pjsSkills}` },
    { img: `${pjsPortfolio}` },
    { img: `${pjsContact}` },
  ];

  const technologieSkills = [
    { skillName: "HTML5 - semantic, video, SVG" },
    { skillName: "CSS3 - SASS, CSS Modules" },
    { skillName: "jQuery" },
    { skillName: "JavaScript ES6" },
    { skillName: "JavaScript Libraries" },
    { skillName: "UI/UX Architecture" },
    { skillName: "UI/UX Animations" },
    { skillName: "Responsive Design" },
    { skillName: "Visual Studio Code" },
    { skillName: "Adobe Photoshop" },
  ];

  return (
    <React.Fragment>
      <PersonalProjectsMenu />
      <ProjectContent
        id={"portfolio-js"}
        projectTitle={"Portfolio - JS"}
        projectLogo={PortfolioJsLogo}
        imageSlider={imagesProjectSlider}
        projectInfo={
          "I have created this project to represent myself, experience and current knowledge over the years. In this project, I demonstrate the communication between HTML, CSS and JavaScript and the creation of dynamic content and DOM manipulations."
        }
        projectSkills={technologieSkills}
        projectUrl={"https://github.com/tonyo88/Portfolio-JavaScript"}
      />
    </React.Fragment>
  );
};

export default PortfolioJs;
