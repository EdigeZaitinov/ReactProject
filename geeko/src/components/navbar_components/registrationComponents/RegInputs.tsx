import React from "react";
import { useEffect } from "react";
import "../../../styles/navbar_component_styles/registrationComponents/RegInputs.css";
import { RegContext } from "../Registration";

var username: any = "";
var email: any = "";
var password: any = "";
var password1: any = "";

var usernameRef = React.createRef<HTMLInputElement>();
var emailRef = React.createRef<HTMLInputElement>();
var passwordRef = React.createRef<HTMLInputElement>();
var password1Ref = React.createRef<HTMLInputElement>();

export default function RegInputs() {
  var regContext = React.useContext(RegContext);

  return (
    <div className="RegistrationInputs" onDoubleClick={see}>
      <input
        type="text"
        className="RegistrationInput"
        ref={usernameRef}
        onChange={updateUsername}
        placeholder="Username"
      />
      <input
        type="text"
        className="RegistrationInput"
        ref={emailRef}
        onChange={updateEmail}
        placeholder="Email"
      />
      <input
        type="text"
        className="RegistrationInput"
        ref={passwordRef}
        onChange={updatePassword}
        placeholder="Password"
      />
      <input
        type="text"
        className="RegistrationInput"
        ref={password1Ref}
        onChange={confirmPassword1}
        placeholder="Confirm password"
      />
      <label className="NotBot">
        <input
          type="checkbox"
          onClick={() =>
            regContext.notBot(username, email, password, password1)
          }
          id="notBot"
        />
        <span>I'm not bot</span>
      </label>
    </div>
  );
}

function see(){
  console.log(username)
  console.log(email)
  console.log(password)
}

function updateUsername() {
  username = usernameRef.current?.value;
}
function updateEmail() {
  email = emailRef.current?.value;
}
function updatePassword() {
  password = passwordRef.current?.value;
}
function confirmPassword1() {
  password1 = password1Ref.current?.value;
}
