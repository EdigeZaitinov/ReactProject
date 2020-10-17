import React, { Component } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "../../styles/navbar_component_styles/DistributionGames.css";

interface Props {}
interface State {
  users: Array<User>;
  games: any;
  name: string;
  email: string;
  password: string;
}

export default class DistributionGames extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      games: [],
      users: [],
      name: "",
      email: "",
      password: "",
    };
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  updateName(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: event.target.value });
  }

  updateEmail(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

componentWillMount(){
    this.getGames()
}

  getGames() {
    console.log("fetching.....");
    fetch("http://127.0.0.1:8000/app/Games")
      .then((response) => response.json())
      .then((responce) =>
        this.setState({
          games: responce,
        })
      );
      console.log(this.state.games)
  }

  addUser(event: any) {
    event.preventDefault();
    this.state.users.push(
      new User(this.state.name, this.state.email, this.state.password)
    );
    console.log(this.state.users);
  }

  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="distributionGamesBody">
          <form className="distributionGamesForm">
            <input
              className="distributionInput"
              onChange={this.updateName}
              type="text"
            />
            <input
              className="distributionInput"
              onChange={this.updateEmail}
              type="text"
            />
            <input
              className="distributionInput"
              onChange={this.updatePassword}
              type="text"
            />
            <button className="distributionButton" onClick={this.addUser}>
              I am ready
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

class User {
  name: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
