import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contact extends Component {

  render() {          
    return (
        <div className="container">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Component
              </p>
            </header>
             
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
                <br/>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
            <footer className="card-footer">
              <a className="card-footer-item">Save</a>
              <a className="card-footer-item">Edit</a>
              <a className="card-footer-item">Delete</a>
            </footer>
          </div>
        </div>
    );
  }
}

export default Contact;
