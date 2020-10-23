import React, { Component } from "react";
import "../../styles/navbar_component_styles/AboutUs.css";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="container">
          <div className="box">
            <div className="icon">GG</div>
            <div className="content">
              <h3>GOOD GAME</h3>
              <p>
                We provide our players with the latest and highly rated games to
                keep you playing only high rated and <b>GOOD GAMES</b>!
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">HF</div>
            <div className="content">
              <h3>HAVE FUN</h3>
              <p>
                Our games guarantee you unrestrained fun all day long, so just
                GOOD LUCK & <b>HAVE FUN</b>!
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">N1</div>
            <div className="content">
              <h3>NUMER ONE</h3>
              <p>
                Our team guarantees you that all our games are checked for
                viruses, because we try to be like you: always be{" "}
                <b>NUMBER ONE</b>!
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
