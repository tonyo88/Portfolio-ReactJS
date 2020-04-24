import "./Nav.css";
import React from "react";
import Logo from "./logo/Logo";
import ToggleButton from "./toggleButton/ToggleButton";
import Menu from "./menu/Menu";


class Nav extends React.Component {

    state = {
        scrolled: false,
        isOpen: false
    }

    componentDidMount () {
     window.addEventListener("scroll", ()=>{
        const isTop = window.scrollY < 100;
        if(isTop !== true){
            this.setState({scrolled: true});
        }else{
            this.setState({scrolled: false});
        }
        
     });
    };
    
    componentWillUnmount (){
      window.removeEventListener("scroll");
    };

    drawerClickHandle = () => {
     this.setState((prevState) =>{
       return {
        isOpen: !prevState.isOpen
       }
     });
    };

    backDropClickHandler = () =>{
      this.setState({isOpen: false});
    };

    render(){

    return(
        <div className={this.state.scrolled ? "navigation active-fixed-nav" : "navigation"}>  
   
            <div className="wrapper">
                <ToggleButton
                 className= {this.state.isOpen ? "line active-toggle-btn" : "line"}
                 openClickHandler={this.drawerClickHandle}
                 />

                <div className="logo">
                    <Logo closeMenu = {this.backDropClickHandler}
                     className={this.state.scrolled ? "logo-name active-fixed-nav-logo" : "logo-name"}
                    />
                </div>
                <Menu 
                 showNav= {this.state.isOpen ? "main-nav showNav" : "main-nav"}
                 activeFixedNavLinkColor = {this.state.scrolled ? "main-link active-fixed-nav-link-color" : "main-link"}
                 activeFixedNavHoverBackColor = {this.state.scrolled ? "link-hover-effect active-fixed-nav-link-hover-back-color" : "link-hover-effect"}
                 activeFixedNavMainLinkColorBorder = {this.state.scrolled ? "main-link-active-border active-fixed-nav-main-link-color-border" : "main-link-active-border"}
                 closeMenu = {this.backDropClickHandler}
                 />
                
            </div>

        </div>
      );
    };
};

export default Nav;