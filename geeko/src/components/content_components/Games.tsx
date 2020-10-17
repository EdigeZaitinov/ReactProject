import React, { Component } from "react";
import "../../styles/content_component_styles/Games.css";
import { Link } from "react-router-dom";

interface Props {

}

interface State {
  gamesList: any;
}

export default class Games extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      gamesList: [],
    };
    this.getGames = this.getGames.bind(this);
  }

  componentWillMount() {
    this.getGames();
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

  render() {
    return (
      <div className="content_games">
        {this.state.gamesList.map((item: any,index:number) => (
          <div className="gameItem" key={index}>
            <Link to={'Games/'+item.fields.name}>
            <img
              className="gameImage"
              src={item.fields.link}
              alt={item.fields.name}
            />
            <h6 className="gameName">{index}:{item.fields.name}</h6>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
