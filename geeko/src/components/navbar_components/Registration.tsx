import React, { Component } from "react";
import "../../styles/navbar_component_styles/Registration.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import RegInputs from "./registrationComponents/RegInputs";

export const Registr = {
  cUsername: "",
  cEmail: "",
  cPassword: "",
  canRegistrate: false,
  alertText:"",
  notBot(u: string, e: string, p: string, p1: string) {
    var checkbox: any = document.getElementById("notBot");
    if (checkbox.checked == true && p == p1 && p != "" && p1 != "") {
      this.cUsername = u;
      this.cEmail = e;
      this.cPassword = p;
      this.canRegistrate = true;
    } else if (checkbox.checked != true && p == p1) {
      this.canRegistrate=false
      this.alertText="please click checkbox"
    } else if (checkbox.checked == true && p != p1) {
      this.canRegistrate=false
      this.alertText="two password fields are not same"
    } else if (checkbox.checked != true && p != p1) {
      this.canRegistrate=false
      this.alertText="please click checkbox and rewrite passwords"
    }
  },
};
export type RegState = typeof Registr;
export const RegContext = React.createContext(Registr);

interface Props {}

interface State {
  username: string;
  email: string;
  password: string;
  users: Array<User>;
}

export default class Registration extends Component<Props, State> {
  regState: RegState = Registr;
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      users: [],
    };
    this.registrateUser = this.registrateUser.bind(this);
  }

  registrateUser() {
    var checkbox: any = document.getElementById("notBot");
    if (this.regState.canRegistrate == true) {
      this.state.users.push(
        new User(this.state.username, this.state.email, this.state.password)
      );
      this.setState({ username: "" });
      this.setState({ email: "" });
      this.setState({ password: "" });
      this.regState.cUsername = "";
      this.regState.cEmail = "";
      this.regState.cPassword = "";
      this.regState.canRegistrate=false;
      console.log(this.state.users)
    }
    else if(this.regState.canRegistrate==false && checkbox.checked==false){
      alert("please click checkbox")
    }
    else if(this.regState.canRegistrate==false){
      alert(this.regState.alertText)
      checkbox.checked=false
    }
  }

  render() {
    return (
      <RegContext.Provider value={this.regState}>
        <div className="home">
          <Navbar />
          <div className="RegistrationBody">
            <div className="RegistrationForm">
              <RegInputs />
              <button
                onClick={this.registrateUser}
                className="RegistrationButton btn waves-effect waves-red"
              >
                Registrate
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </RegContext.Provider>
    );
  }
}

class User {
  username: string;
  password: string;
  email: string;
  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
