import "./FooterContact.css";
import React from "react";
import SocialMenu from "../../socialMenu/SocialMenu";

const FooterContact = () => {

    const socialLinks = [{
        socialUrl: "https://www.facebook.com/",
        socialIcon: "fa fa-facebook"
    },{
        socialUrl: "https://www.linkedin.com/in/anthony-vanov/",
        socialIcon: "fa fa-linkedin"
    },{
        socialUrl: "https://github.com/tonyo88",
        socialIcon: "fa fa-github"
    },{
        socialUrl: "https://www.youracclaim.com/badges/50bed4f8-3ced-4969-ba18-baef88cc05d3/linked_in_profile",
        socialIcon: "fa fa-windows"
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
