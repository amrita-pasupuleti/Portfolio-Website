import React from "react";
import { Link } from "react-router-dom";
import "./hackathon.css";

import aletheia1 from "../images/aletheia1.png";
import aletheia2 from "../images/aletheia2.png";
import aletheia3 from "../images/aletheia3.png";
import aletheia4 from "../images/aletheia4.png";

function Hackathon() {
  const aletheiaImages = [aletheia1, aletheia2, aletheia3, aletheia4];
  return (
    <div className="projects-container">
      <ul className="projects-list">
        <li>
          <div className="project-title">
            <h1>Aletheia - Medical Scanner App</h1>
          </div>
          <h2>Winner at ACM Hacks X GraceHacks 2023 Hackathon</h2>
          <h2>
            Best UI/UX{" "}
            <Link
              to="https://devpost.com/software/aletheia-397t5z"
              target="blank"
            >
              <button className="linkBtn">Devpost Link</button>
            </Link>
          </h2>
          <div style={{ display: "flex" }}>
            {aletheiaImages.map((image, index) => (
              <img
                key={index}
                src={image}
                height={600}
                width={75}
                alt={`Aletheia ${index + 1}`}
                style={{ width: "25%", margin: "5px" }}
              />
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Hackathon;
