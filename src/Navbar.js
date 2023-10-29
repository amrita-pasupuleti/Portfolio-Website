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
          <Link to="/pages/Fff">FFF</Link>
        </li>
        <li>
          <Link to="/pages/Clicker">Other</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
