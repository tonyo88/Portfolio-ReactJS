import "./SectionVideo.css";
import React from "react";


const SectionVideo = () =>{
  return(
      <section id="section-video">
          <div className="wrapper">
      
            <div className="video-info-container">

              <div className="info-container">
                <div className="video-content">
                    <h1 className="video-title">Writing, made simple.</h1>
                    <p className="video-info">
                    Everyone can write, but not everyone is a writer. What makes the
                    difference is the keen eye for detail and beauty.
                  </p>
                </div>
              </div>

                <div className="video-container">
                   <div className="laptop-container">
                     <img className="laptop" src={require("../../../../../assets/pages/home/home-main/section-video/laptop.png")} alt="laptop.png"></img>
                     <img className="typing" src={require("../../../../../assets/pages/home/home-main/section-video/typing.png")} alt="typing.png"></img>
                   </div>
                   
                     <video id="video" autoPlay muted loop>
                      <source src={require("../../../../../assets/pages/home/home-main/section-video/video/typing.mp4")} type="video/mp4"></source>
                    </video>
                </div>

            </div>

          </div>
       
      </section>
  );
};

export default SectionVideo;