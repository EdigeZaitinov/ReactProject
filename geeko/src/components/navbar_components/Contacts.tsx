import React, { Component, ReactElement } from "react";
import "../../styles/navbar_component_styles/Contacts.css";
import Content from "../Content";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface Props {}

export default function Contacts({}: Props): ReactElement {
  return (
    <div className="bodyn">
      <Navbar />
      <div className="container">
        <form action="action_page.php">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <Footer />
    </div>
  );
}
