import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./hackathon.css";

import aletheia1 from "../images/aletheia1.png";
import aletheia2 from "../images/aletheia2.png";
import aletheia3 from "../images/aletheia3.png";
import aletheia4 from "../images/aletheia4.png";

import major1 from "../images/major1.png";
import major2 from "../images/major2.jpeg";

function Hackathon() {
  const firstProjectRef = useRef(null);
  const secondProjectRef = useRef(null);

  const scrollToProject = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const aletheiaImages = [aletheia1, aletheia2, aletheia3, aletheia4];

  return (
    <div className="container">
      <div className="sideBar-container">
        <div className="projects-sidebar">
          <button
            className="scrollBtn"
            onClick={() => scrollToProject(firstProjectRef)}
          >
            Aletheia - Medical Scanner
          </button>
          <button
            className="scrollBtn"
            onClick={() => scrollToProject(secondProjectRef)}
          >
            UCSC 4-year Major Planner
          </button>
        </div>
      </div>

      <div className="projects-container">
        <ul className="projects-list">
          <li ref={firstProjectRef}>
            <div className="project-title">
              <h1>Aletheia - Medical Scanner App</h1>
            </div>
            <h2> -- Winner at ACM Hacks X GraceHacks 2023 Hackathon</h2>
            <h2>
              -- Best UI/UX{" "}
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
                  height={400}
                  width={175}
                  alt={`Aletheia ${index + 1}`}
                  style={{ margin: "5px" }}
                />
              ))}
            </div>
          </li>

          <li ref={secondProjectRef}>
            <div className="project-title">
              <h1>UCSC 4-Year Course Planner</h1>
            </div>
            <h2>
              -- Uses a drag and drop system with web scraping to create a 4
              year calendar with courses at UCSC
            </h2>
            <h2>
              -- Submitted in the education category at CruzHacks 2024{" "}
              <Link
                to="https://devpost.com/software/ucsc-major-reqs-planner"
                target="blank"
              >
                <button className="linkBtn">Devpost Link</button>
              </Link>
            </h2>

            <div className="majorImages">
              <img src={major1} height="300" />
              <img src={major2} height="300" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hackathon;
