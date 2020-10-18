import React, { Component } from "react";
import "../styles/Content.css";
import Games from "./content_components/Games";
import GameTypes from "./content_components/GameTypes";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class Content extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="content_body">
          <Games />
          <GameTypes />
        </div>
        <Footer />
      </div>
    );
  }
}
