import "./SectionAbout.css";
import React from "react";
import AboutInfo from "./aboutInfo/AboutInfo";
import AboutImage from "./aboutImage/AboutImage";

import pageOne from "../../../../../assets/pages/about/about-main/about-section/page-1.png";
import pageTwo from "../../../../../assets/pages/about/about-main/about-section/page-2.png";
import pageThree from "../../../../../assets/pages/about/about-main/about-section/page-3.png";


class SectionAbout extends React.Component {  

  render() {
  
    const images = [
      {
        animation: "rotateInDownRight",
        duration: 0.8,
        image: pageOne,
        alt: "page-1.png"
      },
      {
        animation: "fadeIn",
        duration: 1,
        delay: 1000,
        image: pageTwo,
        alt: "page-2.png"
      },
      {
        animation: "fadeIn",
        duration: 1,
        delay: 1500,
        image: pageThree,
        alt: "page-3.png"
      }
    ];
    return(
       <section id="section-about">
         <div className="wrapper">
            <div className="about-section-container">
              <AboutInfo />
              <AboutImage imagesArray={images}/>
            </div>
           </div>
       </section>
    );
  };
};

export default SectionAbout; 