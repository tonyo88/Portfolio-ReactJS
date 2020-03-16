import "./FooterContact.css";
import React from "react";
import SocialMenu from "../../socialMenu/SocialMenu";

const FooterContact = () => {

    const socialLinks = [{
        url: "https://www.facebook.com/",
        icon: "fa fa-facebook"
    },{
        url: "https://www.linkedin.com/in/tonyo-vanov-850657148/",
        icon: "fa fa-linkedin"
    },{
        url: "https://github.com/tonyo88",
        icon: "fa fa-github"
    },{
        url: "https://www.youracclaim.com/badges/50bed4f8-3ced-4969-ba18-baef88cc05d3/linked_in_profile",
        icon: "fa fa-windows"
    }];

  return(
      <div className="footer-contact-container">

          <div className="contact-info">
            <p>
                <strong className="footer-title">Tonyo Vanov</strong>
                <br />
                Iowa Ave, Los Angeles, CA, 90025
                <br />
                <strong className="footer-title">Phone:   </strong> <a className="footer-contact-link" href="tel:+1-310-923-0276">+1.310.923.0276</a>
                <br />
                <strong className="footer-title">Email:   </strong> <a className="footer-contact-link" href="mailto:tonyo_vanov@yahoo.com">tonyo_vanov@yahoo.com</a>
            </p>
          </div>

          <div className="footer-social-container">
            <SocialMenu linksArray={socialLinks}/>
          </div>
         
      </div>
  );
};

export default FooterContact;
