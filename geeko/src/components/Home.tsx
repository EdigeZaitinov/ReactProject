import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/Home.css";

interface Props{

}
interface State{

}

export default class Home extends Component<Props,State> {
  constructor(props:Props){
    super(props)
    this.state={

    }
    this.toGames=this.toGames.bind(this)
  };

  toGames(){
    window.location.assign("http://localhost:3000/Games")
  }
  
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="homeBody">
          <button className="toGamesButton" onClick={this.toGames}>View games</button>
        </div>
        <Footer />
      </div>
    );
  }
}
