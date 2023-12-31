import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./navbar-style.css";

import Home from "./pages";
import Hackathon from "./pages/Hackathon";
import Fff from "./pages/Fff";
import Clicker from "./pages/Clicker";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/pages/Hackathon" element={<Hackathon />} />
          <Route path="/pages/Fff" element={<Fff />} />
          <Route path="/pages/Clicker" element={<Clicker />} />
        </Routes>
      </div>
    );
  }
}

export default App;

//--------------------------------------------------------------------------------------------------------
