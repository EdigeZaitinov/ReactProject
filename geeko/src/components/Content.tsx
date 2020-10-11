import React, { Component } from "react";
import "../styles/Content.css";
import Games from "./content_components/Games";
import GameTypes from "./content_components/GameTypes";

export default class Content extends Component {
  render() {
    return (
      <div className="content_body">
        <Games/>
        <GameTypes/>
      </div>
    );
  }
}
