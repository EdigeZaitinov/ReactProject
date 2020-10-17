import React, { Component } from "react";
import "../../styles/navbar_component_styles/Registration.css";
import Content from "../Content";
import Footer from "../Footer";
import Navbar from "../Navbar";
import axios from "axios"

interface Props {}

interface State {
  username: string;
  password: string;
}

export default class Registration extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.ButtonSubmit = this.ButtonSubmit.bind(this);
  }

  updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.target.value });
  }

  updatePassword(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  ButtonSubmit(event:any){
    // event.preventDefault()
    // axios.post("http://127.0.0.1:8000/app/UsersPost/",this.state)
    // .then(response=>{
    //   console.log(response)
    // })
    // .catch(error=>{
    //   console.log(error);
    // });
  }

  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="RegistrationBody">
          <form className="RegistrationForm">
            <input
              placeholder="Username"
              value={this.state.username}
              type="text"
              className="RegistrationInput"
              onChange={this.updateUsername}
            />
            <input
              placeholder="Password"
              value={this.state.password}
              type="password"
              className="RegistrationInput"
              onChange={this.updatePassword}
            />
            <button className="RegistrationButton" onClick={this.ButtonSubmit}>
              Registrate
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
