import React, { Component, useContext } from "react";
import "../../styles/content_component_styles/Games.css";
import { Link } from "react-router-dom";
import { GameContext } from "../Navbar";

interface Props {}

interface State {
  gamesList: any;
  gameSearch: string;
  toSearch: boolean;
}

export default class Games extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      gamesList: [],
      gameSearch: "",
      toSearch: false,
    };
    this.getGames = this.getGames.bind(this);
    this.setSearchGame = this.setSearchGame.bind(this);
    this.getSearchingGame = this.getSearchingGame.bind(this);
  }

  componentWillMount() {
      this.getGames();
  }

  setSearchGame(e: string, a: boolean) {
    this.setState({ gameSearch: e });
    this.setState({ toSearch: a });
    if (this.state.gameSearch != "") {
      this.getSearchingGame();
    }
  }

  getGames() {
    console.log("fetching.....");
    fetch("http://127.0.0.1:8000/app/Games")
      .then((response) => response.json())
      .then((responce) =>
        this.setState({
          gamesList: responce,
        })
      );
  }

  getSearchingGame() {
    console.log("searching game");
    fetch("http://127.0.0.1:8000/app/Games/" + this.state.gameSearch + "/")
      .then((response) => response.json())
      .then((response) => this.setState({ gamesList: response }));
  }

  render() {
    return (
      <GameContext.Consumer>
        {(gameContext) => (
          <div
            className="content_games"
            onMouseOut={() =>
              this.setSearchGame(gameContext.game, gameContext.toSearch)
            }
          >
            {this.state.gamesList.map((item: any, index: number) => (
              <div className="gameItem" key={index}>
                <Link to={"Games/" + item.fields.name}>
                  <img
                    className="gameImage"
                    src={item.fields.link}
                    alt={item.fields.name}
                  />
                  <h6 className="gameName">{item.fields.name}</h6>
                </Link>
              </div>
            ))}
          </div>
        )}
      </GameContext.Consumer>
    );
  }
}
