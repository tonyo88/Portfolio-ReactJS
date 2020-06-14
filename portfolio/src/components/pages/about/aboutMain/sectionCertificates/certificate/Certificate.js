import "./Certificate.css";
import React from "react";

const Certificate = (props) =>{
    return(
        <div className="certifcicate-box">

           <div className="certificate-image background-position" style = {props.bgImage}></div>

           <div className="certificate-info">
               <span className="date">{props.date}</span>
               <h2>{props.titleCertificate}</h2>
               <h3>{props.discipline}</h3>
               <p>{props.infoCertificate}</p>
           </div>
        
             <a className="certificate-btn" href={props.certificateUrl} target="_blank" rel="noopener noreferrer">Certificate</a>
           

        </div>
    );
};

export default Certificate;