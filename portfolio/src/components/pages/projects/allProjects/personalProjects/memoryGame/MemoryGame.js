import React from "react";
import ProjectContent from "../../../projectContent/ProjectContent";
import PersonalProjectsMenu from "../../../projectsNavMenu/personalProjectsMenu/PersonalProjectsMenu";

import memoryGameLogo from "../../../../../../assets/pages/projects/memory-game/logo/main-spider.png";
import mgStart from "../../../../../../assets/pages/projects/memory-game/image-slider/memory-game-start.png";
import mgBackCards from "../../../../../../assets/pages/projects/memory-game/image-slider/memory-game-back-cards.png";
import mgFrontCards from "../../../../../../assets/pages/projects/memory-game/image-slider/memory-game-front-cards.png";
import mgVictory from "../../../../../../assets/pages/projects/memory-game/image-slider/memory-game-victory.png";

const MemoryGame = () => {
  const imagesProjectSlider = [
    { img: `${mgStart}` },
    { img: `${mgBackCards}` },
    { img: `${mgFrontCards}` },
    { img: `${mgVictory}` },
  ];

  const technologieSkills = [
    { skillName: "HTML5 - semantic, canvas, SVG" },
    { skillName: "CSS3 - SASS, CSS Modules" },
    { skillName: "JavaScript ES6" },
    { skillName: "Asynchronous Operations" },
    { skillName: "Sound Effects" },
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
        id={"memory-game"}
        projectTitle={"Memory Game"}
        projectLogo={memoryGameLogo}
        imageSlider={imagesProjectSlider}
        projectInfo={
          "Mix-Or-Match Memory Game! Concentration, also known as Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards."
        }
        projectSkills={technologieSkills}
        projectUrl={"https://github.com/tonyo88/MemoryGame"}
      />
    </React.Fragment>
  );
};

export default MemoryGame;
