import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./Navbar.css";

import Home from "./pages/Home";
import Hackathon from "./pages/Hackathon";
import Clicker from "./pages/Other";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/other" element={<Clicker />} />
        </Routes>
      </div>
    );
  }
}

export default App;

//--------------------------------------------------------------------------------------------------------
