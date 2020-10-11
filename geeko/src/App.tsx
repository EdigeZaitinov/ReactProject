import React from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="home">
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
