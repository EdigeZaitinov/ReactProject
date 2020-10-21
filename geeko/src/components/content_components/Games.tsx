import React, { Component, useContext } from "react";
import "../../styles/content_component_styles/Games.css";
import { Link } from "react-router-dom";
import GameTypes from "./GameTypes";

export const Game = {
  game: "",
  toSearch: false,
  setSearchGame(e: string, a: boolean) {
    this.game = e;
    this.toSearch = a;
    alert(this.game);
    alert(this.toSearch);
  },
};
type GameState = typeof Game;
export const GameContext = React.createContext(Game);

interface Props {}

interface State {
  gamesList: any;
  gameSearch: string;
  toSearch: boolean;
}

export default class Games extends Component<Props, State> {
  gameState: GameState = Game;
  constructor(props: Props) {
    super(props);
    this.state = {
      gamesList: [],
      gameSearch: "",
      toSearch: false,
    };
    this.getGames = this.getGames.bind(this);
    this.setSearchingGame = this.setSearchingGame.bind(this);
    this.getSearchingGame = this.getSearchingGame.bind(this);
  }

  componentWillMount() {
    this.getGames();
    if(this.gameState.game!=""){
      this.getSearchingGame();
    }
  }

  setSearchingGame(e: string, a: boolean) {
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
      <GameContext.Provider value={this.gameState}>
        <div className="content_games" onMouseOut={()=>this.setSearchingGame(this.gameState.game,this.gameState.toSearch)}>
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
      </GameContext.Provider>
    );
  }
}
