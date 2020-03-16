import "./App.css";
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import Nav from "./navigation/Nav";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import LittleBarber from "./pages/portfolio/projects/little-barber/LittleBarber";
import VanovPortfolio from "./pages/portfolio/projects/vanovPortfolio/VanovPortfolio";
import Footer from "./footer/Footer";



class App extends React.Component {
    render() {
        return(
            <BrowserRouter>

                    <Nav />

                    <ScrollToTop>
                        <Switch>
                          <Route path="/" exact component={Home} />
                        </Switch>
                    </ScrollToTop>
                    
                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/about" exact component={About} />
                        </Switch>
                    </ScrollToTop>

                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/portfolio" exact component={Portfolio} />
                        </Switch>
                    </ScrollToTop>
                    
                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/contact" exact component={Contact} />
                        </Switch>
                    </ScrollToTop>

                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/portfolio/little-barber" exact component={LittleBarber} /> 
                        </Switch>
                    </ScrollToTop>

                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/portfolio/vanov-portfolio" exact component={VanovPortfolio} /> 
                        </Switch>
                    </ScrollToTop>
                           
                    <Footer />
              
                    <ScrollUpButton />
               
                   
            </BrowserRouter>
  
        );
    };
};

export default App;