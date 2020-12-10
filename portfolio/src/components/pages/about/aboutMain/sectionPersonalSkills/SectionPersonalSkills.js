import "./SectionPersonalSkills.css";

import React from "react";
import SectionTitle from "../../../sectionTitle/SectionTitle";
import PersonalSkill from "./personalSkill/PersonalSkill";

class SectionPersonalSkills extends React.Component {
  render() {
    const personalSkills = [
      {
        delay: 200,
        personalSkillValue: "100",
        personalSkillName: "Responsible",
        responsibleProgress: "responsible",
      },
      {
        delay: 300,
        personalSkillValue: "100",
        personalSkillName: "Team Player",
        responsibleProgress: "team-player",
      },
      {
        delay: 400,
        personalSkillValue: "100",
        personalSkillName: "Organized",
        responsibleProgress: "organized",
      },
      {
        delay: 500,
        personalSkillValue: "100",
        personalSkillName: "Fast Learner",
        responsibleProgress: "fast-learner",
      },
    ];

    const generatePersonalSkills = (personalSkillsArray) =>
      personalSkillsArray.map((element, index) => (
        <PersonalSkill
          key={index}
          delay={element.delay}
          personalSkillValue={element.personalSkillValue}
          personalSkillName={element.personalSkillName}
          responsibleProgress={element.responsibleProgress}
        />
      ));
    return (
      <section id="personal-skills">
        <div className="wrapper">
          <SectionTitle titleName={"Personal Skills"} titleColor={"#262626"} />
          <div className="personal-skills-container">
            {generatePersonalSkills(personalSkills)}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionPersonalSkills;
