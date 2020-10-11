import React, { Component } from "react";
import "../../styles/content_component_styles/GameTypes.css"

export default class GameTypes extends Component {
  render() {
    return (
      <div className="content_game_types">
        <button className="game_type">Strategy</button>
        <button className="game_type">Horror</button>
        <button className="game_type">Shooter</button>
        <button className="game_type">Fighting</button>
        <button className="game_type">Arcade</button>
        <button className="game_type">Sport</button>
        <button className="game_type">Survival</button>
        <button className="game_type">Simulator</button>
      </div>
    );
  }
}
