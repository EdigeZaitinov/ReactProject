import React, { Component } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}
