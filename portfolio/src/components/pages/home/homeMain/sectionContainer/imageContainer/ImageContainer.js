import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const ImageContainer = (props) => {
  return (
    <ScrollAnimation
      animateIn={props.animate}
      duration={0.8}
      animateOnce={true}
      className="image-container"
    >
      <img src={props.image} alt={props.image} className="image-section" />
      {props.children}
    </ScrollAnimation>
  );
};

export default ImageContainer;
