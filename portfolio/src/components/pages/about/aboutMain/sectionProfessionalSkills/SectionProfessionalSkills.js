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
        skillName: "React.js",
        skillValue: "80%",
        outerWidth: { width: "80%" },
        skillBgColor: "45deg, #21ccb0, #045854",
      },
      {
        skillName: "Redux",
        skillValue: "70%",
        outerWidth: { width: "70%" },
        skillBgColor: "45deg, #79f2f7, #027786",
      },
      {
        skillName: "React-Hooks",
        skillValue: "70%",
        outerWidth: { width: "70%" },
        skillBgColor: "60deg, #027786, #20d6f7",
      },
      {
        skillName: "React-Router",
        skillValue: "75%",
        outerWidth: { width: "75%" },
        skillBgColor: "45deg, #20d6f7, #636262",
      },
      {
        skillName: "REST APIs",
        skillValue: "60%",
        outerWidth: { width: "60%" },
        skillBgColor: "45deg, #445656, #2f3f3e",
      },
      {
        skillName: "JavaScript",
        skillValue: "65%",
        outerWidth: { width: "65%" },
        skillBgColor: "45deg, #c4c731, #e4e004",
      },
      {
        skillName: "jQuery",
        skillValue: "60%",
        outerWidth: { width: "60%" },
        skillBgColor: "45deg, #6f3ce7, #290553",
      },
      {
        skillName: "AJAX / JSON",
        skillValue: "70%",
        outerWidth: { width: "70%" },
        skillBgColor: "70deg, #027786, #79f2f7",
      },
      {
        skillName: "Git",
        skillValue: "90%",
        outerWidth: { width: "90%" },
        skillBgColor: "45deg, #585656, #3f3f3e",
      },
      {
        skillName: "HTML5",
        skillValue: "90%",
        outerWidth: { width: "90%" },
        skillBgColor: "45deg, #be640f, #bd370e",
      },
      {
        skillName: "CSS3 / SCSS",
        skillValue: "85%",
        outerWidth: { width: "85%" },
        skillBgColor: "60deg, #0f8cbe, #c90798",
      },
      {
        skillName: "Responsive-Design",
        skillValue: "90%",
        outerWidth: { width: "90%" },
        skillBgColor: "45deg, #f5f24b, #dfac06",
      },
      {
        skillName: "Axios",
        skillValue: "65%",
        outerWidth: { width: "65%" },
        skillBgColor: "45deg, #6f3ce7, #290553",
      },
      {
        skillName: "AWS",
        skillValue: "60%",
        outerWidth: { width: "60%" },
        skillBgColor: "45deg, #f76b07, #e36509",
      },
      {
        skillName: "Material UI",
        skillValue: "65%",
        outerWidth: { width: "65%" },
        skillBgColor: "45deg, #79f2f7, #027786",
      },
      {
        skillName: "Bootstrap",
        skillValue: "60%",
        outerWidth: { width: "60%" },
        skillBgColor: "45deg, #6f3ce7, #290553",
      },
      {
        skillName: "VS Code",
        skillValue: "80%",
        outerWidth: { width: "80%" },
        skillBgColor: "60deg, #85cdff, #027786",
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
