import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navtitle">My Website</h1>
      <ul className="navlinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pages/Hackathon">Hackathon Projects</Link>
        </li>
        <li>
          <Link to="/pages/Fff">Facts Message Board</Link>
        </li>
        <li>
          <Link to="/pages/Clicker">Other Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
