import "./PortfolioSection.css";

import React from "react";
import CurrentPortfolio from "./currentPortfolio/CurrentPortfolio";
import SectionTitle from "../../../sectionTitle/SectionTitle";

import portfolioReact from "../../../../../assets/pages/portfolio/portfolio-main/portfolio-react.png";
import portfolioJS from "../../../../../assets/pages/portfolio/portfolio-main/portfolio-js.png";
import littleBarber from "../../../../../assets/pages/portfolio/portfolio-main/little-barber.png";
import memoryGame from "../../../../../assets/pages/portfolio/portfolio-main/memory-game.png";
import cosmos from "../../../../../assets/pages/portfolio/portfolio-main/cosmos.png";
import megz from "../../../../../assets/pages/portfolio/portfolio-main/megz.png";
import movieInHand from "../../../../../assets/pages/portfolio/portfolio-main/movie-in-hand.png";

const PortfolioSection = () => {
  const workingProjects = [
    {
      delay: 200,
      portfoliotUrl: "cosmos",
      portfolioImgSrc: cosmos,
      portfolioImgAlt: "cosmos.png",
      portfolioTitle: "Cosmos",
      portfolioInfo:
        "HTML5, CSS3, SASS, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
    {
      delay: 300,
      portfoliotUrl: "megz",
      portfolioImgSrc: megz,
      portfolioImgAlt: "megz.png",
      portfolioTitle: "Megz",
      portfolioInfo:
        "HTML5, CSS3, SASS, SVG, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
    {
      delay: 400,
      portfoliotUrl: "movie-in-hand",
      portfolioImgSrc: movieInHand,
      portfolioImgAlt: "movie-in-hand.png",
      portfolioTitle: "Movie in Hand",
      portfolioInfo:
        "HTML5, CSS3, SASS, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
  ];

  const individualProjects = [
    {
      delay: 200,
      portfoliotUrl: "portfolio-react",
      portfolioImgSrc: portfolioReact,
      portfolioImgAlt: "portfolio-react.png",
      portfolioTitle: "Portfolio - React JS",
      portfolioInfo:
        "HTML5, CSS3, SASS, React JS, React Router, React Libraries, SVG, Webpack, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
    {
      delay: 300,
      portfoliotUrl: "portfolio-js",
      portfolioImgSrc: portfolioJS,
      portfolioImgAlt: "portfolio-js.png",
      portfolioTitle: "Portfolio - JS",
      portfolioInfo:
        "HTML5, CSS3, SASS, SVG, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
    {
      delay: 400,
      portfoliotUrl: "little-barber",
      portfolioImgSrc: littleBarber,
      portfolioImgAlt: "little-barber.png",
      portfolioTitle: "Little BarberShop",
      portfolioInfo:
        "HTML5, CSS3, SASS, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
    {
      delay: 500,
      portfoliotUrl: "memory-game",
      portfolioImgSrc: memoryGame,
      portfolioImgAlt: "memory-game.png",
      portfolioTitle: "Memory Game",
      portfolioInfo:
        "HTML5, CSS3, SASS, SVG, JavaScript ES6, Asynchronous Operations, Sound Effects,, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
  ];

  const generatePortfolios = (portfoliosArray) =>
    portfoliosArray.map((element, index) => (
      <CurrentPortfolio
        key={index}
        delay={element.delay}
        portfoliotUrl={element.portfoliotUrl}
        portfolioImgSrc={element.portfolioImgSrc}
        portfolioImgAlt={element.portfolioImgAlt}
        portfolioTitle={element.portfolioTitle}
        portfolioInfo={element.portfolioInfo}
      />
    ));

  return (
    <section id="portfolio-section">
      <div className="wrapper">
        <SectionTitle titleName={"Work Projects"} />
        <div className="portfolio-container work-projects">
          {generatePortfolios(workingProjects)}
        </div>
        <SectionTitle titleName={"Individual Projects"} />
        <div className="portfolio-container">
          {generatePortfolios(individualProjects)}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
