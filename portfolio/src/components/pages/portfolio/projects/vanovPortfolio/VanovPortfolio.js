import React from "react";

const VanovPortfolio = () => {

    return(
        <section id="little-barber" className="project-section">
        <div className="wrapper">

            <div className="project-container">
              <header className="project-header">
                  <h1 className="project-title">Vanov - Portfolio</h1>
                  <div className="project-logo">
                    <img src={require("../../../../../assets/logo/logo-portfolio.png")} alt="logo-portfolio.png"></img>
                  </div>
              </header>

              <div className="project-info">
                  <h2>About this project</h2>
                  <p>I have created this website to represent myself, experience and current knowledge over the years.</p>
              </div>

              <div className="technical-info">
                  <h2>Technical Sheet</h2>
                  <h3>Code technologies I got involved with while working on this project.</h3>
                  <ul className="skill-techniques">
                        <li>HTML5 - semantic, video, svg</li>
                        <li>CSS3 - CSS Modules, SASS, Responsive Design</li>
                        <li>React JS</li>
                        <li>React Router</li>
                        <li>React Libraries</li>
                        <li>Webpack</li>
                        <li>UI/UX Architecture</li>
                        <li>UI/UX Animations</li>
                        <li>Visual Studio Code</li>
                        <li>Adobe Photoshop</li>
                  </ul>
              </div>
              
            </div>
           
           
        </div>
     </section>

    );
};

export default VanovPortfolio;