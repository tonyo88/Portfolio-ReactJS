import React from "react";
import SectionAbout from "./sectionAbout/SectionAbout";
// import SectionExperience from "./sectionExperience/SectionExperience";
import SectionExperience from "./sectionExperienceEducation/sectionExperience/SectionExperience";
import SectionEducation from "./sectionExperienceEducation/sectionEducation/SectionEducation";
import SectionCertificates from "./sectionCertificates/SectionCertificates";
import SectionProfessionalSkills from "./sectionProfessionalSkills/SectionProfessionalSkills";
import SectionPersonalSkills from "./sectionPersonalSkills/SectionPersonalSkills";
import GreyLine from "./greyLine/GreyLine";

class AboutMain extends React.Component {
  render() {
    return (
      <main id="about-main">
        <SectionAbout />
        <GreyLine />
        <SectionExperience />
        <GreyLine />
        <SectionEducation />
        <GreyLine />
        <SectionCertificates />
        <SectionProfessionalSkills />
        <SectionPersonalSkills />
      </main>
    );
  }
}

export default AboutMain;
