import React, { Component } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="main_navbar">
        <h1 className="logo">𝕲𝖊𝖊𝖈𝖔</h1>
        <div className="links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/distributionGames">
            DistributionGames
          </Link>
          <Link className="link" to="/about_us">
            About us
          </Link>
          <Link className="link" to="/contacts">
            Contacts
          </Link>
          <Link className="link" to="help">
            Help
          </Link>
          <Link className="link" to="registration">
            Registration
          </Link>
        </div>
      </div>
    );
  }
}
