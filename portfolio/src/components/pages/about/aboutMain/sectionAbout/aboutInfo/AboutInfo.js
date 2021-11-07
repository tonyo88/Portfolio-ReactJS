import React, { useState } from "react";
import profilePhoto from "../../../../../../assets/pages/about/about-main/about-section/profile-photo.png";
import SectionTitle from "../../../../sectionTitle/SectionTitle";
import resume from "../../../../../../assets/pages/about/about-main/about-section/resume/Tonyo-Vanov-CV.pdf";
import spinner from "../../../../../../assets/pages/contact/3.gif";

const AboutInfo = () => {
  const [loading, setLoading] = useState(false);

  const downloadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="about-info-container">
      <div className="profile-background background-position">
        <div className="profile-wrapper">
          <img
            src={profilePhoto}
            alt="profilephoto.png"
            className="profile-photo"
          />
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-wrapper">
          <h1 className="profile-title">Tonyo Vanov</h1>
          <p className="profile-sub-title">Software Developer</p>
          <p className="profile-location">Los Angeles Metropolitan Area</p>
          <SectionTitle titleName={"About"} />
          <div className="profile-info-container">
            <p className="profile-info">
              Person with 3+ years of IT experience which includes 2+ years of
              experience as a React Developer with hands-on experience in
              identifying web-based user interactions along with designing &
              implementing highly-responsive user interface components by
              deploying React concepts. Proficient in translating designs &
              wireframes into high-quality code, and writing application
              interface code via JavaScript and React.js workflows. Adept at
              monitoring and maintaining frontend performance and
              troubleshooting & debugging the same to bolster overall
              performance.
            </p>
            <p className="profile-info">
              Experienced in: Javascript (ES6+), React.js + Hooks, Redux,
              Router, Webpack, JQuery, SQL, Git, RESTful API, CSS/HTML, SCSS,
              Responsive Web Design.
            </p>
            <p className="profile-info">
              Recent Speaker at PUBLIC TALKS @Ethic Speaker Series (Venice, Los
              Angeles CA): <br />> "CSS Libraries and Design Systems"
            </p>
          </div>
          <a
            href={resume}
            download=""
            className="resume-btn"
            onClick={downloadData}
          >
            {loading && (
              <img src={spinner} alt="3.gif" className="spinner"></img>
            )}
            {loading && <p className="download">Download</p>}
            {!loading && <p>Resume</p>}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
