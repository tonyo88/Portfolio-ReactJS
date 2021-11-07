import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const InfoConatainer = (props) => {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      delay={500}
      animateOnce={true}
      className="info-container flex-middle"
    >
      <div className="info-title">
        <h2 className="title">{props.title}</h2>
        <p className="info">{props.info}</p>
      </div>
    </ScrollAnimation>
  );
};

export default InfoConatainer;
