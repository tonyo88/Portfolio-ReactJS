import "../ProjectStyle.css";

import React from "react";
import ProjectContent from "../projectContent/ProjectContent";
import ScrollAnimation from 'react-animate-on-scroll';

import mKinoLogo from "../../../../../assets/pages/projects/mkino/logo/mkino-logo2.png";
import mKinoHome from "../../../../../assets/pages/projects/mkino/image-slider/mkino-home.png";
import mKinoAbout from "../../../../../assets/pages/projects/mkino/image-slider/mkino-about.png";
import mKinoPartners from "../../../../../assets/pages/projects/mkino/image-slider/mkino-parners.png";
import mKinoMovies from "../../../../../assets/pages/projects/mkino/image-slider/mkino-movies.png";
import mKinoContact from "../../../../../assets/pages/projects/mkino/image-slider/mkino-contact.png";

const MovieInHand = () =>{
  
  const imagesProjectSlider = [
    {img:`${mKinoHome}`},
    {img:`${mKinoAbout}`},
    {img:`${mKinoPartners}`},
    {img:`${mKinoMovies}`},
    {img:`${mKinoContact}`}
  ];

  const technologieSkills = [
    {skillName: "HTML5 - semantic"},
    {skillName: "CSS3 - SASS, Grid Layout, Image Slider"},
    {skillName: "JavaScript ES6"},
    {skillName: "jQuery"},
    {skillName: "JavaScript Libraries"},
    {skillName: "UI/UX Architecture"},
    {skillName: "UI/UX Animations"},
    {skillName: "Responsive Design"},
    {skillName: "Visual Studio Code"},
    {skillName: "Adobe Photoshop"}
  ];
  
    return(
      <ScrollAnimation animateIn='fadeInLeft' duration={1.2} animateOnce={true}>
       <section id="m-kino" className="project-section">
         <ProjectContent
          projectTitleName = {"Movie in Hand"}
          projectLogoImg = {mKinoLogo}
          projectLogoImgAlt = {"mkino-logo.png"}
          imageSlider = {imagesProjectSlider}
          projectContentInfo = {"The goal of the festival A Movie in Hand is popularising the independent film work by using contemporary mobile technologies. The festival aims at supporting versatile and creative personalities, developing socially active citizens of Bulgaria who succeed in fulfilling the possibilities of their personality by giving meaning to cultural and historical experience, to common human values of local and world culture by mastering modern technologies."}
          projectContentSkills = {technologieSkills}
          projectContentUrl = {"http://www.mkino.org/"}
         />
       </section>
       </ScrollAnimation>
    );
};

export default MovieInHand;