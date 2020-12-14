import React from "react";
import CurrentImage from "./currentImage/CurrentImage";

import pageOne from "../../../../../../assets/pages/about/about-main/about-section/page-1.png";
import pageTwo from "../../../../../../assets/pages/about/about-main/about-section/page-2.png";
import pageThree from "../../../../../../assets/pages/about/about-main/about-section/page-3.png";

const AboutImage = () => {
  const images = [
    {
      animation: "rotateInDownRight",
      duration: 0.8,
      image: pageOne,
      alt: "page-1.png",
    },
    {
      animation: "fadeIn",
      duration: 1,
      delay: 1000,
      image: pageTwo,
      alt: "page-2.png",
    },
    {
      animation: "fadeIn",
      duration: 1,
      delay: 1500,
      image: pageThree,
      alt: "page-3.png",
    },
  ];

  const generateImages = (imagesArray) =>
    imagesArray.map((element, index) => (
      <CurrentImage
        key={index}
        animation={element.animation}
        duration={element.duration}
        delay={element.delay}
        image={element.image}
        alt={element.alt}
      />
    ));
  return <div className="about-image-container">{generateImages(images)}</div>;
};

export default AboutImage;
