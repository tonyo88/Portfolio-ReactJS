import "./SectionWebSkills.css";
import React from "react";
import WebSkillCard from "./webSkillCard/WebSkillCard";
import dynamic from "../../../../../assets/pages/home/home-main/section-website-skills/dynamic.jpg";
import fast from "../../../../../assets/pages/home/home-main/section-website-skills/fast.jpg";
import intuitive from "../../../../../assets/pages/home/home-main/section-website-skills/intuitive.jpeg";

const SectionWebSkills = () => {
  const webSkills = [
    {
      style: { backgroundImage: `url(${dynamic})` },
      webSkillTittle: "Dynamic",
      webSkillInfo:
        "Websites don't have to be static, I love making pages come to life.",
    },
    {
      style: { backgroundImage: `url(${fast})` },
      webSkillTittle: "Fast",
      webSkillInfo:
        "Fast load times and lag free interaction, my highest priority.",
    },
    {
      style: { backgroundImage: `url(${intuitive})` },
      webSkillTittle: "Intuitive",
      webSkillInfo: "Strong preference for easy to use, intuitive UX/UI.",
    },
  ];
  const generateWebSkills = (webSkillsArray) =>
    webSkillsArray.map((element, index) => (
      <WebSkillCard
        key={index}
        style={element.style}
        webSkillTittle={element.webSkillTittle}
        webSkillInfo={element.webSkillInfo}
      />
    ));

  return (
    <section className="web-skills-section">
      <div className="wrapper">
        <div className="container-web-skills spacing">
          {generateWebSkills(webSkills)}
        </div>
      </div>
    </section>
  );
};

export default SectionWebSkills;
