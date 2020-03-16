import "../ProjectStyle.css";
import React from "react";
import ProjectContent from "../projectContent/ProjectContent";
// import TechnologiesInfo from "../../projects/projectContent/technologiesInfo/TechnologiesInfo";
import LittleBarberLogo from "../../../../../assets/pages/projects/little-barber/logo/little-barber.png";

const LittleBarber = () =>{

  // const technologieSkills = [{
  //   skillName: "CSS"
  //   },{
  //   skillName: "React"
  //   },{
  //   skillName: "qQuery"
  //   },{
  //   skillName: "ADsa"
  //   }];
  
    return(
       <section id="little-barber" className="project-section">
         <ProjectContent
          projectTitleName={"Little Barber"}
          projectLogoImg={LittleBarberLogo}
          projectLogoImgAlt={"little-barber.png"}
          projectInfo={"Little Barbershop is a space created purely for males who appreciate premium quality, attention to detail, and a flawless look. Is known in the Santa Monica community as a place where class and customer satisfaction reign supreme. Guests can expect to receive a haircut that is tailored to the needs of each individual client. Our barbers are experienced, skilled, and have a love for the craft that sets them apart from other shops. We offer hot towel, straight razor shaves that are one of a kind and leave our guests feeling relaxed, rejuvenated, and ready for life's narrative. Little Barbershop is not just a barbershop, it's an experience."}
          technologieSkillName={"Ivan"}
         />
         {/* <TechnologiesInfo skillsArray={technologieSkills} /> */}



          {/* <div className="wrapper">

              <div className="project-container">
                <header className="project-header">
                    <h1 className="project-title">Little Barber</h1>
                    <div className="project-logo">
                      <img src={require("../../../../../assets/pages/projects/little-barber/logo/little-barber.png")} alt="little-barber.png"></img>
                    </div>
                </header>

                <div className="project-info">
                    <h2>About this project</h2>
                    <p>Little Barbershop is a space created purely for males who appreciate premium quality,
                       attention to detail, and a flawless look. Is known in the Santa Monica community as a
                       place where class and customer satisfaction reign supreme. Guests can expect to receive
                       a haircut that is tailored to the needs of each individual client. Our barbers are 
                       experienced, skilled, and have a love for the craft that sets them apart from other shops.
                       We offer hot towel, straight razor shaves that are one of a kind and leave our guests
                       feeling relaxed, rejuvenated, and ready for life's narrative. Little Barbershop is not
                       just a barbershop, it's an experience.
                   </p>
                </div>

                <div className="technical-info">
                    <h2>Technical Sheet</h2>
                    <h3>Code technologies I got involved with while working on this project.</h3>
                    <ul className="skill-techniques">
                      <li>HTML5 - semantic</li>
                      <li>CSS3 - CSS Modules, SASS, Responsive Design</li>
                      <li>jQuery</li>
                      <li>JavaScript ES6</li>
                      <li>JavaScript Libraries</li>
                      <li>UI/UX Architecture</li>
                      <li>UI/UX Animations</li>
                      <li>Visual Studio Code</li>
                      <li>Adobe Photoshop</li>
                    </ul>
                </div>
                
              </div>
             
             
          </div> */}
       </section>

    );
};

export default LittleBarber;