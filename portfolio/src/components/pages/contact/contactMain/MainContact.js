import "./MainContact.css";
import React from "react";
import Form from "./form/Form";
import ContactInfo from "./contactInfo/ContactInfo"


class MainContact extends React.Component{

    render() {
        return(
            <main id="contact-main">
                <div className="wrapper">
                    <div className="contact-form-container">
                        <ContactInfo />
                        <Form />
                    </div>   
                </div>
            </main>
        );
    };
};

export default MainContact;