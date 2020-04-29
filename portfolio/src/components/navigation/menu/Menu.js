import "./Menu.css";
import React from "react";
import SocialMenu from "../../socialMenu/SocialMenu";
import MainMenuLink from "./mainMenuLink/MainMenuLink";

class Menu extends React.Component  {
    


    render(){
        const socialLinks = [{
            url: "https://www.facebook.com/",
            icon: "fa fa-facebook"
        },{
            url: "https://www.linkedin.com/in/anthony-vanov/",
            icon: "fa fa-linkedin"
        },{
            url: "https://github.com/tonyo88",
            icon: "fa fa-github"
        },{
            url: "https://www.youracclaim.com/badges/50bed4f8-3ced-4969-ba18-baef88cc05d3/linked_in_profile",
            icon: "fa fa-windows"
        },{
            url: "mailto:tonyo_vanov@yahoo.com",
            icon: "fa fa-envelope"
        }];

    return (

        <nav className={this.props.showNav}>
            <div className="main-menu-container">
                <ul className="main-menu">
            
                    <MainMenuLink 
                      mainLinkUrl = {"/"}
                      linkName={"Home"}
                      closeMenu= {this.props.closeMenu}
                      activeFixedNavLinkColor = {this.props.activeFixedNavLinkColor}
                      activeFixedNavMainLinkColorBorder= {this.props.activeFixedNavMainLinkColorBorder}
                      activeFixedNavHoverBackColor = {this.props.activeFixedNavHoverBackColor}
                    />
                     <MainMenuLink 
                      mainLinkUrl = {"/pages/about"}
                      linkName={"About"}
                      closeMenu= {this.props.closeMenu}
                      activeFixedNavLinkColor = {this.props.activeFixedNavLinkColor}
                      activeFixedNavMainLinkColorBorder= {this.props.activeFixedNavMainLinkColorBorder}
                      activeFixedNavHoverBackColor = {this.props.activeFixedNavHoverBackColor}
                    />
                    
                    <MainMenuLink 
                      mainLinkUrl = {"/pages/portfolio"}
                      linkName={"Portfolio"}
                      closeMenu= {this.props.closeMenu}
                      activeFixedNavLinkColor = {this.props.activeFixedNavLinkColor}
                      activeFixedNavMainLinkColorBorder= {this.props.activeFixedNavMainLinkColorBorder}
                      activeFixedNavHoverBackColor = {this.props.activeFixedNavHoverBackColor}
                    />
                     <MainMenuLink 
                      mainLinkUrl = {"/pages/contact"}
                      linkName={"Contact"}
                      closeMenu= {this.props.closeMenu}
                      activeFixedNavLinkColor = {this.props.activeFixedNavLinkColor}
                      activeFixedNavMainLinkColorBorder= {this.props.activeFixedNavMainLinkColorBorder}
                      activeFixedNavHoverBackColor = {this.props.activeFixedNavHoverBackColor}
                    />

                    </ul>

                    <div className="mobile-social">
                      <SocialMenu linksArray={socialLinks} />
                   </div>

            </div>

        </nav>
    );
  };
};

export default Menu;