import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./Navbar.css";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    );
  }
}

export default App;

//--------------------------------------------------------------------------------------------------------
