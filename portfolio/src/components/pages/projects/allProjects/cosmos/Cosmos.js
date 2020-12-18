import React from "react";
import ProjectContent from "../../projectContent/ProjectContent";

import cosmosLogo from "../../../../../assets/pages/projects/cosmos/logo/cosmos-logo.png";
import cosmosHome from "../../../../../assets/pages/projects/cosmos/image-slider/cosmos-home.png";
import cosmosNews from "../../../../../assets/pages/projects/cosmos/image-slider/cosmos-news.png";
import cosmosMenu from "../../../../../assets/pages/projects/cosmos/image-slider/cosmos-menu.png";
import cosmosInitiatives from "../../../../../assets/pages/projects/cosmos/image-slider/cosmos-initiatives.png";
import cosmosContact from "../../../../../assets/pages/projects/cosmos/image-slider/cosmos-contact.png";

const Cosmos = () => {
  const imagesProjectSlider = [
    { img: `${cosmosHome}` },
    { img: `${cosmosNews}` },
    { img: `${cosmosMenu}` },
    { img: `${cosmosInitiatives}` },
    { img: `${cosmosContact}` },
  ];

  const technologieSkills = [
    { skillName: "HTML5 - semantic" },
    { skillName: "CSS3 - SASS, Grid Layout, FlexBox, Parallax" },
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
      id={"cosmos"}
      projectTitle={"Cosmos"}
      projectLogo={cosmosLogo}
      imageSlider={imagesProjectSlider}
      projectInfo={
        "We create and transform. Flavors. Experiences. Ourselves. Exploring the vast universe of tastes, we create our own version of Bulgarian cuisine. There is a restaurant in the Sofia center where two universes meet and blend their worlds creating a fascinating atmosphere made of cosmic mysteries and earthly riches. It’s a place where all forgotten secrets of traditional Bulgarian cuisine touch the unknown space beyond the usual and get inspired by the cosmic vastness that embraces our home planet Earth."
      }
      projectSkills={technologieSkills}
      projectUrl={"https://cosmosbg.com/en/"}
    />
  );
};

export default Cosmos;
