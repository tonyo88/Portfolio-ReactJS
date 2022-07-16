import "./PortfolioSection.css";
import React from "react";
import CurrentPortfolio from "./currentPortfolio/CurrentPortfolio";
import SectionTitle from "../../../sectionTitle/SectionTitle";

import portfolioReact from "../../../../../assets/pages/portfolio/portfolio-main/portfolio-react.png";
import weatherApp from "../../../../../assets/pages/portfolio/portfolio-main/weather-app.png";
import littleBarber from "../../../../../assets/pages/portfolio/portfolio-main/little-barber.png";
import memoryGame from "../../../../../assets/pages/portfolio/portfolio-main/memory-game.png";
import cosmos from "../../../../../assets/pages/portfolio/portfolio-main/cosmos.png";
import iAm from "../../../../../assets/pages/portfolio/portfolio-main/i-am.png";
import ledSvetlini from "../../../../../assets/pages/portfolio/portfolio-main/led-svetlini.png";
import movieInHand from "../../../../../assets/pages/portfolio/portfolio-main/movie-in-hand.png";

const PortfolioSection = () => {
  const workProjects = [
    {
      delay: 200,
      portfoliotUrl: "cosmos",
      portfolioImg: cosmos,
      portfolioTitle: "Cosmos",
      portfolioInfo:
        "HTML5, CSS3, SASS, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
    {
      delay: 300,
      portfoliotUrl: "i-am",
      portfolioImg: iAm,
      portfolioTitle: "I-AM",
      portfolioInfo:
        "HTML5, CSS3, SASS, SVG, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
    {
      delay: 400,
      portfoliotUrl: "led-svetlini",
      portfolioImg: ledSvetlini,
      portfolioTitle: "Led Svetlini",
      portfolioInfo:
        "HTML5, CSS3, SASS, SVG, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
    {
      delay: 500,
      portfoliotUrl: "movie-in-hand",
      portfolioImg: movieInHand,
      portfolioTitle: "Movie in Hand",
      portfolioInfo:
        "HTML5, CSS3, SASS, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
  ];

  const personalProjects = [
    {
      delay: 200,
      portfoliotUrl: "portfolio-react",
      portfolioImg: portfolioReact,
      portfolioTitle: "Portfolio - React JS",
      portfolioInfo:
        "React JS, React Router, React Libraries, HTML5, CSS3, SASS, SVG, Webpack, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
    {
      delay: 400,
      portfoliotUrl: "weather-app",
      portfolioImg: weatherApp,
      portfolioTitle: "Weather App",
      portfolioInfo:
        "React JS, React Libraries, Webpack, Fetch, HTML5, CSS3, SASS, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
    {
      delay: 500,
      portfoliotUrl: "little-barber",
      portfolioImg: littleBarber,
      portfolioTitle: "Little BarberShop",
      portfolioInfo:
        "HTML5, CSS3, SASS, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop",
    },
    {
      delay: 600,
      portfoliotUrl: "memory-game",
      portfolioImg: memoryGame,
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
        portfolioImg={element.portfolioImg}
        portfolioTitle={element.portfolioTitle}
        portfolioInfo={element.portfolioInfo}
      />
    ));

  return (
    <section id="portfolio-section">
      <div className="wrapper">
        <SectionTitle titleName={"Work Projects"} />
        <div className="portfolio-container work-projects">
          {generatePortfolios(workProjects)}
        </div>
        <SectionTitle titleName={"Personal Projects"} />
        <div className="portfolio-container">
          {generatePortfolios(personalProjects)}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
