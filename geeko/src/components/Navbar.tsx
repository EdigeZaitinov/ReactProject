import React, { Component } from "react";
import "../styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="main_navbar">
        <h1 className="logo">𝕲𝖊𝖊𝖈𝖔</h1>
        <div className="links">
          <a href="/" className="link">
            About us
          </a>
          <a href="/" className="link">
            Contacts
          </a>
          <a href="/" className="link">
            Help
          </a>
          <a href="/" className="link">
            Registration
          </a>
        </div>
      </div>
    );
  }
}
