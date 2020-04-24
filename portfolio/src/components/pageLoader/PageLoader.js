import "./PageLoader.css";
import React from "react";

class PageLoader extends React.Component{

    state = {
        loading: true
    };

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 700)
    }
  
    render() {
        return(
              <div>
                {this.state.loading &&
                    <div className="loader-container">
                    <div className="sk-cube-grid">
                        <div className="sk-cube sk-cube1"></div>
                        <div className="sk-cube sk-cube2"></div>
                        <div className="sk-cube sk-cube3"></div>
                        <div className="sk-cube sk-cube4"></div>
                        <div className="sk-cube sk-cube5"></div>
                        <div className="sk-cube sk-cube6"></div>
                        <div className="sk-cube sk-cube7"></div>
                        <div className="sk-cube sk-cube8"></div>
                        <div className="sk-cube sk-cube9"></div>
                    </div>
                </div>
               }
             </div>  
            
        );
    };
};

export default PageLoader;