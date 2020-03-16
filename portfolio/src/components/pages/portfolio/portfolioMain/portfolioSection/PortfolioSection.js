import "./PortfolioSection.css";
import React from "react";
import CurrentProject from "./currentPortfolio/CurrentProject";
import SectionTitle from "../../../../sectionTitle/SectionTitle";
import VanovPortfolio from "../../../../../assets/pages/portfolio/portfolio-main/vanov.png";
import LittleBarber from "../../../../../assets/pages/portfolio/portfolio-main/little-barber.png";

class PortfolioSection extends React.Component{
  
    render() {
        return(
            <section id="portfolio-section">
              <div className="wrapper">
                  
                  <SectionTitle titleName={"Front End Web Development"} />

                  <div className="portfolio-container">

                    <CurrentProject
                      projectUrl={"vanov-portfolio"}
                      projectImgSrc={VanovPortfolio}
                      projectImgAlt={"vanov.png"}
                      projectTitle={"Vanov - Portfolio"}
                      projectInfo={"HTML5, CSS3, SASS, React JS, React Router, React Libraries, Webpack, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop"}
                    />

                    <CurrentProject
                      projectUrl={"little-barber"}
                      projectImgSrc={LittleBarber}
                      projectImgAlt={"LittleBarber"}
                      projectTitle={"Little Barber"}
                      projectInfo={"HTML5, CSS3, SASS, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop"}
                    />

                    <CurrentProject
                      projectUrl={"little-barber"}
                      projectImgSrc={LittleBarber}
                      projectImgAlt={"LittleBarber"}
                      projectTitle={"Little Barber"}
                      projectInfo={"HTML5, CSS3, SASS, JavaScript ES6, jQuery, JavaScript Libraries, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop"}
                    />

                    <CurrentProject
                      projectUrl={"vanov-portfolio"}
                      projectImgSrc={VanovPortfolio}
                      projectImgAlt={"vanov.png"}
                      projectTitle={"Vanov - Portfolio"}
                      projectInfo={"HTML5, CSS3, SASS, React JS, React Router, React Libraries, Webpack, UI/UX Architecture, UI/UX Animations, Responsive Design, Visual Studio Code, Adobe Photoshop"}
                    />

                   </div>
              </div>
            </section>
        );
    };
};

export default PortfolioSection;