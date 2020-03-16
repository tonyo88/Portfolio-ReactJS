import React from "react";
import SectionAbout from "./sectionAbout/SectionAbout";
import SectionCertificates from "./sectionCertificates/SectionCertificates";
import SectionProfessionalSkills from "./sectionProfessionalSkills/SectionProfessionalSkills";
import SectionPersonalSkills from "./sectionPersonalSkills/SectionPersonalSkills";

class AboutMain extends React.Component {
    render() {
     return(
        <main id="about-main">
            <SectionAbout />
            <SectionCertificates />
            <SectionProfessionalSkills />
            <SectionPersonalSkills  />
        </main>
     );
    };
};

export default AboutMain;