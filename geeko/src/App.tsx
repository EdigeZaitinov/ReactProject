import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/navbar_components/Registration";
import AboutUs from "./components/navbar_components/AboutUs";
import Contacts from "./components/navbar_components/Contacts";
import Home from "./components/Home";
import Game from "./components/content_components/Game";
import Content from "./components/Content";
import DistributionGames from "./components/navbar_components/DistributionGames";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registration" component={Registration} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/Games/:gameName" component={Game}/>
        <Route path="/Games"component={Content}/>
        <Route path="/distributionGames" component={DistributionGames}/>
      </Switch>
    </Router>
  );
}

export default App;
