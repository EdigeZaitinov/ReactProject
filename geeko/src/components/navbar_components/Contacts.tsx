import React, { Component } from "react";
import "../../styles/navbar_component_styles/Contacts.css";
import Content from "../Content";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default class Contacts extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="contactsBody">
            <p>Contacts</p>
        </div>
        <Footer />
      </div>
    );
  }
}
