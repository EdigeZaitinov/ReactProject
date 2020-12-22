import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar_component_styles/Login.css";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface Props {}

export default function Login({}: Props): ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Емейл не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  let count: number;
  count = 0;

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else setFormValid(true);
    count++;
  }, [emailError, passwordError]);

  const emailHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Емейл некорректен!");
    } else setEmailError("");
    // e.preventDefault();
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6 || e.target.value.length > 12) {
      setPasswordError("Пароль должен быть длиннее 6 и меньше 12");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else setPasswordError("");
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
    }
  };

  return (
    <div className="home">
      <Navbar />
      <div className="distributionOfgames">
        <form className="login">
          <h1>Логин</h1>
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <input
            onChange={(e) => emailHandler(e)}
            value={email}
            onBlur={(e) => blurHandler(e)}
            name="email"
            type="text"
            placeholder="Email"
          />
          {passwordError && passwordDirty && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
          <input
            onChange={(e) => passwordHandler(e)}
            value={password}
            onBlur={(e) => blurHandler(e)}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Link to="/">
            <button className="button" disabled={!formValid} type="submit">
              Войти
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}
