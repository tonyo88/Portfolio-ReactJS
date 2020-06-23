import "./AboutInfo.css";
import React from "react";

import resume from "../../../../../../assets/pages/about/about-main/about-section/resume/Anthony-Vanov-Resume.pdf";
import spinner from "../../../../../../assets/pages/contact/3.gif";

class AboutInfo extends React.Component{

    state ={
        loading: false
      }
   
      downloadData = () =>{
        this.setState({loading: true});
        setTimeout(() =>{
         this.setState({loading: false});
        }, 1000)
      };

   render() {

    const { loading } = this.state;

    return(
        <div className="about-info-container">
        <div className="info-container">
            <h1 className="about-title">Who am I?</h1>

            <p>
              Motivated, quick learning, energetic person with
              ambition to work and learn from the best in
              field. Person with great interest in IT world with
              bright vision in future and motivated to cover
              different targets.
            </p>
            <p>
              To work for a growing up company that will
              provide me with the possibility of growing within
              it and will allow the development my abilities
              and skills in favor of the company’s mission
              and my environment.
            </p>

            <a href={resume} download="" className="resume-btn" onClick={this.downloadData} disabled={loading}>
                {loading && <img className="spinner" src={spinner} alt="3.gif" />}
                {loading && <p className="download">Download</p>}
                {!loading && <p>Resume</p>}
            </a>
        </div>
      </div>
    );
  };
};

export default AboutInfo;