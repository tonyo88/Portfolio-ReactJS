import "./ContactInfo.css";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="info">
        <p>
          <strong>Tonyo Vanov</strong>
          <br />
          Iowa Ave, Los Angeles
          <br />
          California, 90025
        </p>
        <p>
          <strong>Email Address</strong>
          <br />
          <a href="mailto:tonyo_vanov@yahoo.com" rel="noopener noreferrer">
            tonyo_vanov@yahoo.com
          </a>
        </p>
        <p>
          <strong>Phone Number</strong>
          <br />
          <a href="tel:+1-310-923-0276" rel="noopener noreferrer">
            +1.310.923.0276
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
