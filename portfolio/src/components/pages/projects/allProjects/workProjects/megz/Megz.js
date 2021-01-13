import React from "react";
import ProjectContent from "../../../projectContent/ProjectContent";
import WorkProjectsMenu from "../../../projectsNavMenu/workProjectsMenu/WorkProjectsMenu";

import megzLogo from "../../../../../../assets/pages/projects/megz/logo/megz-logo.png";
import megzHome from "../../../../../../assets/pages/projects/megz/image-slider/megz-home.png";
import megzWomen from "../../../../../../assets/pages/projects/megz/image-slider/megz-women.png";
import megzMen from "../../../../../../assets/pages/projects/megz/image-slider/megz-men.png";
import megzOffers from "../../../../../../assets/pages/projects/megz/image-slider/megz-offers.png";
import megzCheckout from "../../../../../../assets/pages/projects/megz/image-slider/megz-checkout.png";

const Megz = () => {
  const imagesProjectSlider = [
    { img: `${megzHome}` },
    { img: `${megzWomen}` },
    { img: `${megzMen}` },
    { img: `${megzOffers}` },
    { img: `${megzCheckout}` },
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
        id="megz"
        projectTitle={"Megz"}
        projectLogo={megzLogo}
        imageSlider={imagesProjectSlider}
        projectInfo={
          "Megz is a fashion brand for a luxurious experience with women's clothing at affordable prices. Putting elements of haute couture and street fashion into its clothing over the past five years, Megz pushes the limits of its capabilities with a single goal: To provide you with the latest fashion trends at the lowest possible price. Our philosophy is very simple: Whether it's day or night, you have a special occasion or you're just at work in the office - all eyes must be on you!"
        }
        projectSkills={technologieSkills}
        projectUrl={"https://megz.eu/"}
      />
    </React.Fragment>
  );
};

export default Megz;
