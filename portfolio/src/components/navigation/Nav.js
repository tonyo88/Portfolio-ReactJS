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
                 mainLinkColor = {this.state.scrolled ? "main-link fixed-main-link-color" : "main-link"}
                 mainLinkHover = {this.state.scrolled ? "main-link-hover fixed-main-link-hover" : "main-link-hover"}
                 activeClassName = {this.state.scrolled ? "active-main-link fixed-active-main-link" : "active-main-link"}
                 closeMenu = {this.backDropClickHandler}
                 />
                
            </div>

        </div>
      );
    };
};

export default Nav;