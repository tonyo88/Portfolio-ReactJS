
import React from "react";
import ProjectContent from "../projectContent/ProjectContent";

import littleBarberLogo from "../../../../../assets/pages/projects/little-barber/logo/little-barber-logo.png";
import lbHome from "../../../../../assets/pages/projects/little-barber/image-slider/little-barber-home.png";
import lbAbout from "../../../../../assets/pages/projects/little-barber/image-slider/little-barber-about.png";
import lbGallery from "../../../../../assets/pages/projects/little-barber/image-slider/little-barber-gallery.png";
import lbConatct from "../../../../../assets/pages/projects/little-barber/image-slider/little-barber-contact.png";

const LittleBarber = () =>{
  
  const imagesProjectSlider = [
    {img:`${lbHome}`},
    {img:`${lbAbout}`},
    {img:`${lbGallery}`},
    {img:`${lbConatct}`}
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
          <ProjectContent
            id = {"little-barber"}
            projectTitleName = {"Little Barber"}
            projectLogoImg = {littleBarberLogo}
            projectLogoImgAlt = {"little-barber.png"}
            imageSlider = {imagesProjectSlider}
            projectContentInfo = {"Little Barbershop is a space created purely for males who appreciate premium quality, attention to detail, and a flawless look. Is known in the Santa Monica community as a place where class and customer satisfaction reign supreme. Guests can expect to receive a haircut that is tailored to the needs of each individual client. Our barbers are experienced, skilled, and have a love for the craft that sets them apart from other shops. We offer hot towel, straight razor shaves that are one of a kind and leave our guests feeling relaxed, rejuvenated, and ready for life's narrative. Little Barbershop is not just a barbershop, it's an experience."}
            projectContentSkills = {technologieSkills}
            projectContentUrl = {"https://github.com/tonyo88/LittleBarbershop"}
          />
    );
};

export default LittleBarber;