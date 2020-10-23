import React from "react";
import { useEffect } from "react";
import "../../../styles/navbar_component_styles/registrationComponents/RegInputs.css"
import {RegContext} from "../Registration"

var username:string="";
var email:string="";
var password:string="";
var password1:string="";

export default function RegInputs() {

  var regContext=React.useContext(RegContext)

  useEffect(()=>{
    console.log(username)
  },[username])

  return (
    <div className="RegistrationInputs">
      <input type="text" className="RegistrationInput" onChange={updateUsername} placeholder="Username" />
      <input type="text" className="RegistrationInput" onChange={updateEmail} placeholder="Email" />
      <input type="text" className="RegistrationInput" onChange={updatePassword} placeholder="Password" />
      <input type="text" className="RegistrationInput" onChange={confirmPassword1} placeholder="Confirm password" />
      <label className="NotBot">
        <input type="checkbox" onClick={()=>regContext.notBot(username,email,password,password1)} id="notBot"/>
        <span>I'm not bot</span>
      </label>
    </div>
  );
}

function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
   username=event.target.value;
}
function updateEmail(event: React.ChangeEvent<HTMLInputElement>) {
  email=event.target.value;
}
function updatePassword(event: React.ChangeEvent<HTMLInputElement>) {
  password=event.target.value;
}
function confirmPassword1(event: React.ChangeEvent<HTMLInputElement>) {
  password1=event.target.value;
}


