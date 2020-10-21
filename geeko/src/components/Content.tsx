import React, { Component } from "react";
import Games from "./content_components/Games";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class Content extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Games />
        <Footer />
      </div>
    );
  }
}
