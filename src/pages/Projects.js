import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./projects.css";

import aletheia1 from "../images/aletheia1.png";
import aletheia2 from "../images/aletheia2.png";
import aletheia3 from "../images/aletheia3.png";
import aletheia4 from "../images/aletheia4.png";
import fff1 from "../images/fff1.png";
import fff2 from "../images/fff2.png";
import prompts1 from "../images/prompts1.png";
import major1 from "../images/major1.png";
import major2 from "../images/major2.jpeg";

function Projects() {
  const firstProjectRef = useRef(null);
  const secondProjectRef = useRef(null);
  const prompts = useRef(null);
  const fff = useRef(null);

  const scrollToProject = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const aletheiaImages = [aletheia1, aletheia2, aletheia3, aletheia4];

  return (
    <div className="container">
      <div className="sideBar-container">
        <button
          className="scrollBtn"
          onClick={() => scrollToProject(firstProjectRef)}
        >
          Medical Scanner App
        </button>
        <button className="scrollBtn" onClick={() => scrollToProject(fff)}>
          Fun Facts Website
        </button>
        <button className="scrollBtn" onClick={() => scrollToProject(prompts)}>
          AI Prompts Website
        </button>
        <button
          className="scrollBtn"
          onClick={() => scrollToProject(secondProjectRef)}
        >
          College Course Planner
        </button>
      </div>

      {/* Content Here */}
      <div className="projects-container">
        <ul className="projects-list">
          {/* --------------------- First Project ---------------------- */}
          <li ref={firstProjectRef}>
            <div className="project-title">
              <h1>
                Aletheia - Medical Scanner App{" "}
                <Link
                  to="https://github.com/Aryan-Vora/ACMxGraceHacks2023"
                  target="blank"
                >
                  <button className="linkBtn">Github</button>
                </Link>
              </h1>
            </div>
            <h2>
              -- Technologies: React Vite, Supabase Auth, OCR, OpenAI, Figma
            </h2>
            <h2>
              {" "}
              -- Winner at{" "}
              <a
                href="https://devpost.com/software/aletheia-397t5z"
                target="blank"
              >
                ACM Hacks X GraceHacks 2023 Hackathon
              </a>
            </h2>
            <h2>-- Best UI/UX </h2>
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
          {/* --------------------- Second Project ---------------------- */}
          <li ref={fff}>
            <div className="project-title">
              <h1>
                Fun Facts Website{" "}
                <Link to="https://fun-facts-website.vercel.app/" target="blank">
                  <button className="linkBtn">Github</button>
                </Link>
              </h1>
            </div>

            <h2> -- Technologies: React, Supabase</h2>
            <h2> -- Used Supabase and APIs to store posts </h2>
            <img src={fff1} height="300" alt="major1" />
            <img src={fff2} height="300" alt="major2" />
          </li>
          {/* --------------------- Third Project ---------------------- */}
          <li ref={prompts}>
            <div className="project-title">
              <h1>
                AI Prompts Website{" "}
                <Link
                  to="https://github.com/amrita-pasupuleti/AI-Prompts-Website/tree/main"
                  target="blank"
                >
                  <button className="linkBtn">Github</button>
                </Link>
              </h1>
            </div>
            <h2>-- Technologies: Node JS, MongoDB, nextAuth, Tailwind CSS</h2>
            <h2>-- A website for sharing and discovering AI prompts</h2>

            <div className="majorImages">
              <img src={prompts1} height="400" alt="major1" />
            </div>
          </li>
          {/* --------------------- Fourth Project ---------------------- */}
          <li ref={secondProjectRef}>
            <div className="project-title">
              <h1>
                UCSC 4-Year Course Planner{" "}
                <Link
                  to="https://github.com/PurrGod/college-planner-webapp"
                  target="blank"
                >
                  <button className="linkBtn">Github</button>
                </Link>
              </h1>
            </div>
            <h2>-- Technologies: React, Python, MongoDB, Beautiful Soup</h2>
            <h2>
              -- Uses a drag and drop system to create a 4 year calendar with
              courses at UCSC
            </h2>
            <h2>
              -- Submitted in the education category at{" "}
              <a
                href="https://devpost.com/software/ucsc-major-reqs-planner"
                target="blank"
              >
                CruzHacks 2024
              </a>{" "}
            </h2>

            <div className="majorImages">
              <img src={major1} height="300" alt="major1" />
              <img src={major2} height="300" alt="major2" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
