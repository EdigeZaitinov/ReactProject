import React, { Component } from "react";
import "../../styles/navbar_component_styles/Help.css";
import Content from "../Content";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default class Help extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="helpBody">
            <p>Help</p>
        </div>
        <Footer />
      </div>
    );
  }
}
