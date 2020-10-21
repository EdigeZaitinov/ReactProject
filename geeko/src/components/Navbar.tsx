import React, { Component } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { setSyntheticLeadingComments } from "typescript";
import { type } from "os";

export const Game={
  game:'',
  toSearch:false,
}
type GameState=typeof Game
export const GameContext = React.createContext(Game);


interface Props {}
interface State {
  gameInInput: string;
}

export default class Navbar extends Component<Props, State> {
  gameState:GameState=Game
  constructor(props: Props) {
    super(props);
    this.state = {
      gameInInput: "",
    };
    this.changeSearchGame = this.changeSearchGame.bind(this);
    this.setSearchGame=this.setSearchGame.bind(this)
  }

  changeSearchGame(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ gameInInput: event.target.value });
  }

  setSearchGame(){
    this.gameState.game=this.state.gameInInput
    this.gameState.toSearch=true
  }

  render() {
    return (
      <GameContext.Provider value={this.gameState}>
        <div className="main_navbar">
          <h1 className="logo">𝕲𝖊𝖊𝖈𝖔</h1>
          <div className="linksAndSearch">
            <div className="links">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/about_us">
                About us
              </Link>
              <Link className="link" to="/contacts">
                Contacts
              </Link>
              <Link className="link" to="help">
                Help
              </Link>
              <Link className="link" to="registration">
                Registration
              </Link>
            </div>
            <form className="search">
              <input
                className="searchInput"
                type="text"
                value={this.state.gameInInput}
                placeholder="name of game"
                onChange={this.changeSearchGame}
              />
              <img
                className="searchButton"
                src="https://thumbs.dreamstime.com/b/%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0-%D1%83%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B8%D0%B2%D0%B0%D0%B5%D1%82-%D0%B7%D0%BD%D0%B0%D0%BA-%D0%BB%D1%83%D0%BF%D1%8B-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0-107950947.jpg"
                onClick={this.setSearchGame}
              />
            </form>
          </div>
        </div>
      </GameContext.Provider>
    );
  }
}
