import "./PortfolioSection.css";

import React from "react";
import CurrentPortfolio from "./currentPortfolio/CurrentPortfolio";
import SectionTitle from "../../../../sectionTitle/SectionTitle";
import ScrollAnimation from 'react-animate-on-scroll';

import VanovPortfolio from "../../../../../assets/pages/portfolio/portfolio-main/portfolio-react.png";
import PortfolioJS from "../../../../../assets/pages/portfolio/portfolio-main/portfolio-js.png";
import LittleBarber from "../../../../../assets/pages/portfolio/portfolio-main/little-barber.png";
import MemoryGame from "../../../../../assets/pages/portfolio/portfolio-main/memory-game.png";


class PortfolioSection extends React.Component{
  
    render() {
        return(
            <section id="portfolio-section" className="background-position">
              <div className="wrapper">
                  
                  <SectionTitle titleName={"Front End Development"} titleColor={"#262626"} />

                  <div className="portfolio-container">

                  <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true} delay={200}>
                    <CurrentPortfolio
                      portfoliotUrl={"portfolio-react"}
                      portfolioImgSrc={VanovPortfolio}
                      portfolioImgAlt={"portfolio-react.png"}
                      portfolioTitle={"Portfolio - React JS"}
                      portfolioInfo={"HTML5, CSS3, SASS, React JS, React Router, React Libraries, SVG, Webpack, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop"}
                    />
                  </ScrollAnimation>

                  <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true} delay={300}>
                    <CurrentPortfolio
                      portfoliotUrl={"portfolio-js"}
                      portfolioImgSrc={PortfolioJS}
                      portfolioImgAlt={"portfolio-js.png"}
                      portfolioTitle={"Portfolio - JS"}
                      portfolioInfo={"HTML5, CSS3, SASS, SVG, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop"}
                    />
                  </ScrollAnimation>

                  <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true} delay={400}>
                    <CurrentPortfolio
                      portfoliotUrl={"little-barber"}
                      portfolioImgSrc={LittleBarber}
                      portfolioImgAlt={"little-barber.png"}
                      portfolioTitle={"Little BarberShop"}
                      portfolioInfo={"HTML5, CSS3, SASS, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop"}
                    />
                  </ScrollAnimation>

                   <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true} delay={500}>
                    <CurrentPortfolio
                      portfoliotUrl={"memory-game"}
                      portfolioImgSrc={MemoryGame}
                      portfolioImgAlt={"memory-game.png"}
                      portfolioTitle={"Memory Game"}
                      portfolioInfo={"HTML5, CSS3, SASS, SVG, JavaScript ES6, Asynchronous Operations, Sound Effects,, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop"}
                    />
                   </ScrollAnimation>

                   </div>
              </div>
            </section>
        );
    };
};

export default PortfolioSection;