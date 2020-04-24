import "./Form.css";
import React from "react";
import axios from "axios";

import Loading from "../../../../../assets/pages/contact/3.gif";

const emailRegex =  RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

class Form extends React.Component{

    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        formErrors: {
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        },
        loading: false
    }; 
  
    handleSubmit = async (e) =>{
       e.preventDefault();

        if(this.formValid(this.state)) {

        const {firstName, lastName, email, message} = this.state;
        setTimeout( () => {
          this.setState({loading: true});
        }, 500);

        await axios.post('/api/form', {
            firstName,
            lastName,
            email,
            message
        }).then((res) => {
            setTimeout(() => {         
                this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                    formErrors: {
                        firstName: "",
                        lastName: "",
                        email: "",
                        message: ""
                    },
                    showSuccess: true,
                    loading: false
                 });
           }, 1000);
        });
       } else {
           this.setState({showSuccess: false});
       }
    };

    formValid = (state) =>{
  
        let valid = true;
    
        Object.entries(state).forEach((key) => {
            this.checkPropertyValidation(key[0], key[1]);
        });
    
        Object.values(state.formErrors).forEach( (val) => {
            val.length > 0 && (valid = false);
        });
    
        Object.values(state).forEach( (val) => {
            val === '' && (valid = false);
        });
    
       return valid;
    };

    handleChange =(e) => {
        e.preventDefault();

        const { name, value } = e.target;
        this.checkPropertyValidation(name, value);
    };

    checkPropertyValidation =(key, value) => {
        let formErrors = this.state.formErrors;
        switch (key) {

            case "firstName":
                formErrors.firstName =
                 value.length < 3
                 ? "Minimum 3 characters are required!"
                 : "";
            break;

            case "lastName":
                formErrors.lastName = 
                 value.length < 3
                 ? "Minimum 3 characters are required!"
                 : "";
            break;
            
            case "email":
                formErrors.email = 
                 emailRegex.test(value)
                 ? ""
                 : "Invalid Email Address!";
            break;

            default: 
              break;

         };

        this.setState( {formErrors, [key]: value } );
    }


    render () {

        const { formErrors } = this.state;
        const { loading } = this.state;
     
        return(
            <div className="contact-form">
                <form className="form">
                    <input
                     className={formErrors.firstName.length > 0 ? "contact-text-form error" : "contact-text-form"}
                     name="firstName" 
                     type="text"
                     placeholder="First Name"
                     value={this.state.firstName}
                     onChange={this.handleChange}        
                     />
                    {formErrors.firstName.length > 0 && (
                      <span className="error-message">{formErrors.firstName}</span>
                    )}

                    <input
                     className={formErrors.lastName.length > 0 ? "contact-text-form error" : "contact-text-form"}
                     name="lastName" 
                     type="text"
                     placeholder="Last Name"
                     onChange={this.handleChange}
                     value={this.state.lastName}
                     />
                      {formErrors.lastName.length > 0 && (
                      <span className="error-message">{formErrors.lastName}</span>
                    )}

                    <input
                     className={formErrors.email.length > 0 ? "contact-text-form error" : "contact-text-form"}
                     name="email" 
                     type="email"
                     placeholder="Email"  
                     onChange={this.handleChange}
                     value={this.state.email}               
                    />
                     {formErrors.email.length > 0 && (
                      <span className="error-message">{formErrors.email}</span>
                    )}

                    <textarea
                     className="contact-text-form"
                     placeholder="Your Message"
                     name="message"
                     onChange={this.handleChange}
                     value={this.state.message}   
                    ></textarea>

                    <button className="contact-form-btn" type="submit" onClick={this.handleSubmit}  disabled={loading}>
                        {loading && <img className="sending-loader" src={Loading} alt="contact/3.gif" />}
                        {loading && <p className="sending">Sending</p>}
                        {!loading && <p>SEND</p>}
                    </button>
                </form>
                {this.state.showSuccess && (<span className="success"><i className="fa fa-check" aria-hidden="true"></i>SUCCESS</span>)}
          </div>
        );
    };
};

export default Form;