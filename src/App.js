import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home.component";
import SignIn from "./components/signIn.component";
import Register from "./components/register.component";
import Dashboard from "./components/dashboard.component";
import logo from "./logo.svg";

class App extends Component {
  render() {

    const navbar={
      height: '60px',
      zIndex: '99999'  
    }
    
    return (
    
      <Router> 
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={navbar}>
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/sign" className="nav-link">SignIn</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Home} />
          <Route path="/sign" component={SignIn}/>
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
      </Router>
      
    );
  }
}

export default App;
