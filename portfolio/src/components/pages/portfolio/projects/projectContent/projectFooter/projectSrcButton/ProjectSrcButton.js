import "./ProjectSrcButton.css";
import React from "react";

const ProjectSrcButton = (props) =>{

    return(
      <a href={props.url} target="_blank" rel="noopener noreferrer" className="box">View SRC</a>
    );
};

export default ProjectSrcButton;