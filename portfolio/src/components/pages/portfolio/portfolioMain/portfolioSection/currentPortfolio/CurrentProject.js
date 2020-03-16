import "./CurrentProject.css";
import React from "react";
import {Link} from "react-router-dom";

const CurrentProject = (props) => {
   return(
      <div className="project-box">
       <Link className="project-link" to={`/pages/portfolio/${props.projectUrl}`}>
          <img src={props.projectImgSrc} alt={props.projectImgAlt}></img>
          <figure>
             <figcaption>
                <h2 className="project-title">{props.projectTitle}</h2>
                <p className="project-info">{props.projectInfo}
                 <span>view more..</span>               
                </p>
                
             </figcaption>
          </figure>
          
       </Link>
     </div>
   );
}

export default CurrentProject;