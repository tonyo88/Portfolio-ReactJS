import React from "react";

const Certificate = (props) => {
  return (
    <a
      href={props.certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-box"
    >
      <div
        className="certificate-image background-position"
        style={props.bgImage}
      ></div>

      <div className="certificate-info-container">
        <span className="date">{props.date}</span>
        <h2 className="certificate-title">{props.titleCertificate}</h2>
        <h3 className="certificate-discipline">{props.discipline}</h3>
        <p className="certificate-info">{props.infoCertificate}</p>
      </div>

      <div className="certificate-btn">Certificate</div>
    </a>
  );
};

export default Certificate;
