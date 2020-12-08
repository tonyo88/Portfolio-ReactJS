import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const ImageContainer = (props) => {
  return (
    <ScrollAnimation
      className="image-container"
      animateIn="fadeIn"
      duration={0.5}
      animateOnce={true}
    >
      <img src={props.image} alt={props.image} className="image-section" />
      {props.children}
    </ScrollAnimation>
  );
};

export default ImageContainer;
