import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const InfoConatainer = (props) => {
  return (
    <ScrollAnimation
      className="info-container flex-middle"
      animateIn="fadeIn"
      delay={500}
      duration={1}
      animateOnce={true}
    >
      <div className="info-title">
        <h2 className="title">{props.title}</h2>
        <p className="info">{props.info}</p>
      </div>
    </ScrollAnimation>
  );
};

export default InfoConatainer;
