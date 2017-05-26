import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './../logo.svg';
import './../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'

import App from './../App';
import Contact from './../Contact';

class Header extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log('At header')       
    return (  
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
            </a>
          </div>

          <div className="nav-right nav-menu">
            <Link to="/form-post" className="nav-item">
              Home
            </Link>
            <Link to='/todo' className="nav-item">
              Todo
            </Link>
            <Link to='/contact' className="nav-item">
              Contact
            </Link>
          </div>
        </nav>
    );
  }
}

export default Header;