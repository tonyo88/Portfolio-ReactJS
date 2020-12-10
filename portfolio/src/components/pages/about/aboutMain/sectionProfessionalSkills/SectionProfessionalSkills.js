import "./SectionProfessionalSkills.css";
import React from "react";
import SectionTitle from "../../../sectionTitle/SectionTitle";
import ProfessionalSkill from "./professionalSkill/ProfessionalSkill";

class SectionProfessionalSkills extends React.Component {
  state = {
    isMouseOver: false,
  };

  mouseMoveOver = () => {
    this.setState({ isMouseOver: true });
  };

  render() {
    const professionalSkills = [
      {
        skillName: "React.JS",
        skillValue: "75%",
        outerWidth: { width: "75%" },
        skillBgColor: "45deg, #21ccb0, #045854",
      },
      {
        skillName: "Redux",
        skillValue: "60%",
        outerWidth: { width: "60%" },
        skillBgColor: "45deg, #79f2f7, #027786",
      },
      {
        skillName: "React-Router",
        skillValue: "70%",
        outerWidth: { width: "70%" },
        skillBgColor: "45deg, #20d6f7, #636262",
      },
      {
        skillName: "HTML5",
        skillValue: "90%",
        outerWidth: { width: "90%" },
        skillBgColor: "45deg, #be640f, #bd370e",
      },
      {
        skillName: "CSS3",
        skillValue: "80%",
        outerWidth: { width: "80%" },
        skillBgColor: "45deg, #0f8cbe, #2832c5",
      },
      {
        skillName: "SCSS",
        skillValue: "85%",
        outerWidth: { width: "85%" },
        skillBgColor: "45deg, #a53b7c, #c90798",
      },
      {
        skillName: "JavaScript",
        skillValue: "60%",
        outerWidth: { width: "60%" },
        skillBgColor: "45deg, #c4c731, #e4e004",
      },
      {
        skillName: "jQuery",
        skillValue: "65%",
        outerWidth: { width: "65%" },
        skillBgColor: "45deg, #6f3ce7, #290553",
      },
      {
        skillName: "Git",
        skillValue: "80%",
        outerWidth: { width: "80%" },
        skillBgColor: "45deg, #585656, #3f3f3e",
      },
      {
        skillName: "Responsive-Design",
        skillValue: "85%",
        outerWidth: { width: "85%" },
        skillBgColor: "45deg, #f5f24b, #dfac06",
      },
      {
        skillName: "Photoshop",
        skillValue: "65%",
        outerWidth: { width: "65%" },
        skillBgColor: "45deg, #2313f8, #240088",
      },
      {
        skillName: "Wordpress",
        skillValue: "50%",
        outerWidth: { width: "50%" },
        skillBgColor: "45deg, #92dbf1, #03b5eb",
      },
    ];

    const generateProfessionalSkills = (professionalSkillsAray) =>
      professionalSkillsAray.map((element, index) => (
        <ProfessionalSkill
          key={index}
          skillName={element.skillName}
          skillValue={element.skillValue}
          outerWidth={element.outerWidth}
          skillBgColor={element.skillBgColor}
          innerProgress={
            this.state.isMouseOver
              ? "active-inner-progress inner-progress"
              : "inner-progress"
          }
        />
      ));
    return (
      <section
        id="section-professional-skills"
        className="background-position"
        onMouseOver={this.mouseMoveOver}
      >
        <div className="wrapper">
          <SectionTitle
            titleName={"Professional Skills"}
            titleColor={"#f7f7f9"}
          />
          <div className="professional-skills-container">
            {generateProfessionalSkills(professionalSkills)}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionProfessionalSkills;
