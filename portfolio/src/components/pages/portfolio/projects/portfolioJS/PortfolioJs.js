import "../ProjectStyle.css";

import React from "react";
import ProjectContent from "../projectContent/ProjectContent";
import ScrollAnimation from 'react-animate-on-scroll';

import PortfolioJsLogo from "../../../../../assets/logo/logo-portfolio.png";
import pjsHome from "../../../../../assets/pages/projects/portfolio-js/image-slider/portfolio-js-home.png";
import pjsSkills from "../../../../../assets/pages/projects/portfolio-js/image-slider/portfolio-js-skills.png";
import pjsPortfolio from "../../../../../assets/pages/projects/portfolio-js/image-slider/portfolio-js-portf.png";
import pjsContact from "../../../../../assets/pages/projects/portfolio-js/image-slider/portfolio-js-contact.png";

const PortfolioJs = () =>{

  const imagesProjectSlider = [
    {img:`${pjsHome}`},
    {img:`${pjsSkills}`},
    {img:`${pjsPortfolio}`},
    {img:`${pjsContact}`}
  ];

  const technologieSkills = [
    {skillName: "HTML5 - semantic, video, SVG"},
    {skillName: "CSS3 - SASS, CSS Modules"},
    {skillName: "jQuery"},
    {skillName: "JavaScript ES6"},
    {skillName: "JavaScript Libraries"},
    {skillName: "UI/UX Architecture"},
    {skillName: "UI/UX Animations"},
    {skillName: "Responsive Design"},
    {skillName: "Visual Studio Code"},
    {skillName: "Adobe Photoshop"}
  ];
  
    return(
      <ScrollAnimation animateIn='fadeInLeft' duration={1.2} animateOnce={true}>
        <section id="portfolio-js" className="project-section">
         <ProjectContent
          projectTitleName = {"Portfolio - JS"}
          projectLogoImg = {PortfolioJsLogo}
          projectLogoImgAlt = {"logo-portfolio.png"}
          imageSlider = {imagesProjectSlider}
          projectContentInfo = {"I have created this project to represent myself, experience and current knowledge over the years."}
          projectContentSkills = {technologieSkills}
          projectContentUrl = {"https://github.com/tonyo88/Portfolio-JavaScript"}
         />
       </section>
       </ScrollAnimation>
    );
};

export default PortfolioJs;