import React from "react";
import ProjectContent from "../../projectContent/ProjectContent";

import ledSvetliniLogo from "../../../../../assets/pages/projects/led-svetlini/logo/led-svetlini-logo.png";
import ledSvetliniHome from "../../../../../assets/pages/projects/led-svetlini/image-slider/led-svetini-home.png";
import ledSvetliniProducts from "../../../../../assets/pages/projects/led-svetlini/image-slider/led-svetlini-products.png";
import ledSvetliniBlog from "../../../../../assets/pages/projects/led-svetlini/image-slider/led-svetlini-blog.png";
import ledSvetliniOrderList from "../../../../../assets/pages/projects/led-svetlini/image-slider/led-svetlini-order-list.png";

const LedSvetlini = () => {
  const imagesProjectSlider = [
    { img: `${ledSvetliniHome}` },
    { img: `${ledSvetliniProducts}` },
    { img: `${ledSvetliniBlog}` },
    { img: `${ledSvetliniOrderList}` },
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
    <ProjectContent
      id={"led-svetlini"}
      projectTitle={"Led Svetlini"}
      projectLogo={ledSvetliniLogo}
      imageSlider={imagesProjectSlider}
      projectInfo={
        "As an expert on LED bulbs, LEDsvetlini.com always meets quality standards. We strictly test the quality, without any compromises and optimal levels of light output, even in the harshest weather conditions. This ensures that our ice bulbs are significantly brighter and provide road safety without blinding oncoming traffic."
      }
      projectSkills={technologieSkills}
      projectUrl={"https://ledsvetlini.com/"}
    />
  );
};

export default LedSvetlini;
