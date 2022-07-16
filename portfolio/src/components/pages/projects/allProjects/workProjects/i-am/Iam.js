import React from "react";
import ProjectContent from "../../../projectContent/ProjectContent";
import WorkProjectsMenu from "../../../projectsNavMenu/workProjectsMenu/WorkProjectsMenu";

import iAmLogo from "../../../../../../assets/pages/projects/i-am/logo/i-am-logo.png";
import iAmHome from "../../../../../../assets/pages/projects//i-am/image-slider/i-am-home.png";
import iAmWomen from "../../../../../../assets/pages/projects//i-am/image-slider/i-am-women.png";
import iAmMen from "../../../../../../assets/pages/projects//i-am/image-slider/i-am-man.png";
import iAmKids from "../../../../../../assets/pages/projects//i-am/image-slider/i-am-kids.png";
import iAmBasket from "../../../../../../assets/pages/projects//i-am/image-slider/i-am-basket.png";

const Iam = () => {
  const imagesProjectSlider = [
    { img: `${iAmHome}` },
    { img: `${iAmWomen}` },
    { img: `${iAmMen}` },
    { img: `${iAmKids}` },
    { img: `${iAmBasket}` },
  ];

  const technologieSkills = [
    { skillName: "HTML5 - semantic" },
    { skillName: "CSS3 - SASS, Grid Layout, Image Slider" },
    { skillName: "JavaScript ES6" },
    { skillName: "jQuery" },
    { skillName: "JavaScript Libraries" },
    { skillName: "UI/UX Architecture" },
    { skillName: "UI/UX Animations" },
    { skillName: "Responsive Design" },
    { skillName: "Visual Studio Code" },
    { skillName: "Adobe Photoshop" },
  ];

  return (
    <React.Fragment>
      <WorkProjectsMenu />
      <ProjectContent
        id="i-am"
        projectTitle={"I-AM"}
        projectLogo={iAmLogo}
        imageSlider={imagesProjectSlider}
        projectInfo={
          "I-AM is a fashion brand for a luxurious experience with women's clothing at affordable prices. Putting elements of haute couture and street fashion into its clothing over the past five years, Megz pushes the limits of its capabilities with a single goal: To provide you with the latest fashion trends at the lowest possible price. Our philosophy is very simple: Whether it's day or night, you have a special occasion or you're just at work in the office - all eyes must be on you!"
        }
        projectSkills={technologieSkills}
        projectUrl={"https://i-am.bg/"}
      />
    </React.Fragment>
  );
};

export default Iam;
