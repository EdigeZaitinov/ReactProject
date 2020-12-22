import React, { useMemo, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { logoContext } from "./components/LogoContext";
import ErrorBoundary from "./ErrorBoundary";
// import Registration from "./components/navbar_components/Registration";
import AboutUs from "./components/navbar_components/AboutUs";
import Contacts from "./components/navbar_components/Contacts";
// import Home from "./components/Home";
// import Game from "./components/content_components/Game";
// import Content from "./components/Content";
// import Login from "./components/navbar_components/Login";

const Registration = React.lazy(() => import("./components/navbar_components/Registration"));
const Home = React.lazy(() => import("./components/Home"));
const Game = React.lazy(() => import("./components/content_components/Game"));
const Content = React.lazy(() => import("./components/Content"));
const Login = React.lazy(() => import("./components/navbar_components/Login"));

function App() {
  const [value, setValue] = useState("white");
  const providerColor = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <div>
      <Router>
        <logoContext.Provider value={providerColor}>
          <ErrorBoundary>
            <React.Suspense fallback={"Loading..."}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/registration" component={Registration} />
                <Route path="/Games/registration" component={Registration} />
                <Route path="/login" component={Login} />
                <Route path="/about_us" component={AboutUs} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/Games/:gameName" component={Game} />
                <Route path="/Games" component={Content} />
              </Switch>
            </React.Suspense>
          </ErrorBoundary>
        </logoContext.Provider>
      </Router>
    </div>
  );
}

export default App;
