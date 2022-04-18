import "./HomeMain.css";
import React from "react";
import SectionWebSkills from "./sectionWebsiteSkills/SectionWebSkills";
import SectionContainer from "./sectionContainer/SectionContainer";
import InfoConatainer from "./sectionContainer/infoContainer/InfoContainer";
import ImageContainer from "./sectionContainer/imageContainer/ImageContainer";

import phone from "../../../../assets/pages/home/home-main/section-website-skills/phone.png";
import laptop from "../../../../assets/pages/home/home-main/section-video/laptop-two.png";
import typing from "../../../../assets/pages/home/home-main/section-video/typing-two.png";
import video from "../../../../assets/pages/home/home-main/section-video/video/typing.mp4";

const HomeMain = () => {
  return (
    <main id="home-main">
      <SectionWebSkills />
      <SectionContainer sectionClassName="responsive-section">
        <ImageContainer image={phone} animate="fadeInLeft" />
        <InfoConatainer
          title="Responsive"
          info="My layouts will work on any device, big or small."
        />
      </SectionContainer>
      <SectionContainer sectionClassName="video-section">
        <InfoConatainer
          title="Writing, made simple."
          info="Everyone can write, but not everyone is a writer. What makes the
                difference is the keen eye for detail and beauty."
        />
        <ImageContainer image={laptop} animate="fadeInRight">
          <img className="typing" src={typing} alt="typing.png" />
          <video className="video" autoPlay muted loop>
            <source src={video} type="video/mp4"></source>
          </video>
        </ImageContainer>
      </SectionContainer>
    </main>
  );
};
export default HomeMain;
