import "./ProjectInfo.css";
import React from "react";

const ProjectInfo = (props) =>{
    return(
       <div className="project-info">
           <h2>About this project</h2>
           <p>{props.info}</p>
       </div>
    );
};

export default ProjectInfo;