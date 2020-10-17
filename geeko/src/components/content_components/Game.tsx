import { type } from "os";
import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "../../styles/content_component_styles/Game.css";

type RouteParams = {
  gameName: string;
};

export default class Game extends Component<RouteComponentProps<RouteParams>> {
  state = {
    gameName1: this.props.match.params.gameName,
    game: [],
  };

  componentWillMount() {
    this.getGame();
  }

  getGame() {
    fetch("http://127.0.0.1:8000/app/Games/" + this.state.gameName1 + "/")
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          game: response,
        })
      );
    console.log(this.state.game);
  }

  render() {
    return (
      <div className="gamePage">
        <Navbar />
        {this.state.game.map((item: any, index: number) => (
          <div className="gamePageBody" key={index}>
            <h3 className="gamePageName">{item.fields.name}</h3>
            <div className="gamePageImageAndDescription">
              <img
                className="gamePageImage"
                src={item.fields.link}
                alt={item.fields.name}
              />
              <p className="gamePageDescription">{item.fields.description}</p>
            </div>
          </div>
        ))}
        <Footer />
      </div>
    );
  }
}
