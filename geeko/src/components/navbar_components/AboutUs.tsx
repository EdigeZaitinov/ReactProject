import React, { Component } from "react";
import "../../styles/navbar_component_styles/AboutUs.css";
import Content from "../Content";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="aboutUsBody">
        </div>
        <Footer />
      </div>
    );
  }
}
