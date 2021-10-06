import React from "react";

import resume from "../../../../../../assets/pages/about/about-main/about-section/resume/Anthony-Vanov-Resume.pdf";
import spinner from "../../../../../../assets/pages/contact/3.gif";

class AboutInfo extends React.Component {
  state = {
    loading: false,
  };

  downloadData = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="about-info-container flex-middle">
        <div className="info-container">
          <h1 className="about-title">Who am I?</h1>

          <p className="about-info">
            Person with 3+ years of IT experience which includes 2+ years of
            experience as a React Developer with hands-on experience in
            identifying web-based user interactions along with designing &
            implementing highly-responsive user interface components by
            deploying React concepts. Proficient in translating designs &
            wireframes into high-quality code, and writing application interface
            code via JavaScript and React.js workflows. Adept at monitoring and
            maintaining frontend performance and troubleshooting & debugging the
            same to bolster overall performance.
          </p>
          <a
            href={resume}
            download=""
            className="resume-btn"
            onClick={this.downloadData}
            disabled={loading}
          >
            {loading && <img className="spinner" src={spinner} alt="3.gif" />}
            {loading && <p className="download">Download</p>}
            {!loading && <p>Resume</p>}
          </a>
        </div>
      </div>
    );
  }
}

export default AboutInfo;
