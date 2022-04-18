import React from "react";
import SectionTitle from "../../../../sectionTitle/SectionTitle";
import ExperienceEducationContent from "../experienceEducationContent/ExperienceEducationContent";

//Logos
import codesmith from "../../../../../../assets/pages/about/about-main/education/code-smith.png";
import smc from "../../../../../../assets/pages/about/about-main/education/smc.png";
import dTsenov from "../../../../../../assets/pages/about/about-main/education/tsenov.png";
import unwe from "../../../../../../assets/pages/about/about-main/education/unwe.png";

const SectionEducation = () => {
  const codeSmith = [
    {
      detail: "React.js, Redux, React-Router, React-Hooks.",
    },
    {
      detail: "REST APIs, Ajax, JSON, Axios, SQL.",
    },
    {
      detail: "JavaScript, jQuery, Webpack, Node.js",
    },
    {
      detail: "HTML5, CSS3, SCSS.",
    },
    {
      detail: "Amazon Web Services (AWS), Bootstrap, Git.",
    },
    {
      detail: "Visual Studio Code, Atom, Jira.",
    },
    {
      detail: "UI/UX Design, Responsive Web Design, Adobe Photoshop.",
    },
  ];
  const sMCollege = [
    {
      detail: "Javascript Programming.",
    },
    {
      detail: "jQuery Programming.",
    },
    {
      detail: "HTML5, CSS3 inluding SCSS.",
    },
    {
      detail: "Database Concepts and Applications",
    },
    {
      detail: "Fundamentals of Computer Security.",
    },
    {
      detail: "Computer Engines in Amazon Web Services.",
    },
    {
      detail: "Network Fundamentals and Architecture.",
    },
    {
      detail: "Responsive Web Design.",
    },
    {
      detail: "UI/UX Design.",
    },
  ];
  const dATsenov = [
    {
      detail: "Control theory.",
    },
    {
      detail: "Finacial control theory.",
    },
    {
      detail: "Analysis of financial statements.",
    },
    {
      detail: "Internal audit in banks.",
    },
    {
      detail: "Analysis of financial statements.",
    },
    {
      detail: "International auditing standarts.",
    },
    {
      detail:
        "Public sector audit, accounting concepts and standarts financial inspection.",
    },
  ];
  const uNWE = [
    {
      detail: "Mathematics",
    },
    {
      detail: "Business informatics.",
    },
    {
      detail: "Accounting.",
    },
    {
      detail: "Project management software.",
    },
    {
      detail: "Project management in the public sector.",
    },
    {
      detail: "Business management in public administration.",
    },
    {
      detail: "Territorial administration and administrative capacity.",
    },
    {
      detail: "Development and evaluation of public policies and programs.",
    },
    {
      detail: "Basics of law.",
    },
  ];

  return (
    <div className="wrapper">
      <SectionTitle titleName="Education" />
      <section id="section-education" className="experience-education-content">
        <ExperienceEducationContent
          refUrl="https://www.codesmith.io/"
          refLogo={codesmith}
          position="Codesmith"
          name="Computer Software Engineering - Residency for Experienced Programmers"
          dateRange="Oct 2019 - Jan 2020"
          location="Los Angeles, California, United States"
          detailsArray={codeSmith}
        />
        <ExperienceEducationContent
          refUrl="https://www.smc.edu/"
          refLogo={smc}
          position="Santa Monica College"
          name="Associate of Science - AS, Computer Software and Media Applications"
          dateRange="Mar 2018 - Mar 2019"
          location="Los Angeles, California, United States"
          detailsArray={sMCollege}
        />
        <ExperienceEducationContent
          refUrl="https://www.uni-svishtov.bg/en"
          refLogo={dTsenov}
          position="D. A. Tsenov Academy of Economics"
          name="Master of Business Administration - MBA, Financial Control and External Audit"
          dateRange="Sep 2014 - Jul 2015"
          location="Svishtov, Bulgaria"
          detailsArray={dATsenov}
        />
        <ExperienceEducationContent
          refUrl="https://www.unwe.bg/en/"
          refLogo={unwe}
          position="University of National and World Economy"
          name="Bachelor's Degree, Accounting and Finance"
          dateRange="Sep 2009 - Jul 2014"
          location="Sofia, Bulgaria"
          detailsArray={uNWE}
        />
      </section>
    </div>
  );
};

export default SectionEducation;
