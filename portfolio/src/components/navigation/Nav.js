import "./Nav.css";
import React from "react";
import Logo from "./logo/Logo";
import ToggleButton from "./toggleButton/ToggleButton";
import Menu from "./menu/Menu";

class Nav extends React.Component {
  state = {
    scrolled: false,
    isOpen: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  drawerClickHandle = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  backDropClickHandler = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <nav
        className={
          this.state.scrolled ? "navigation active-fixed-nav" : "navigation"
        }
      >
        <div className="wrapper">
          <ToggleButton
            className={this.state.isOpen ? "line active-toggle-btn" : "line"}
            openClickHandler={this.drawerClickHandle}
          />
          <Logo
            closeMenu={this.backDropClickHandler}
            className={
              this.state.scrolled ? "logo-name fixed-logo" : "logo-name"
            }
          />
          <Menu
            showNav={this.state.isOpen ? "main-nav show-nav" : "main-nav"}
            mainLinkColor={
              this.state.scrolled ? "main-link fixed-main-link" : "main-link"
            }
            mainLinkHover={
              this.state.scrolled
                ? "hover-effect fixed-hover-effect"
                : "hover-effect"
            }
            activeClassName={
              this.state.scrolled
                ? "active-main-link fixed-active-main-link"
                : "active-main-link"
            }
            closeMenu={this.backDropClickHandler}
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
