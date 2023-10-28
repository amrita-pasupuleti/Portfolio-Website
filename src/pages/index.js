import React from "react";
import "./Home-style.css";

const Home = () => {
  return (
    <>
      <div className="sidebar">
        <h2>Sections</h2>
        <ul>
          <li>
            <a href="#first">About Me</a>
          </li>
          <li>
            <a href="#second">Skills</a>
          </li>
          <li>
            <a href="#third">Contacts</a>
          </li>
          <li>
            <a href="#fourth">Links</a>
          </li>
          <li>
            <a href="#fifth">About this Site</a>
          </li>
        </ul>
      </div>

      <div className="content">
        <section id="first">
          <h1>About Me</h1>
          <p>
            Hi, my name is Amrita Pasupuleti! I'm a second-year computer science
            major at the University of California, Santa Cruz.
          </p>
        </section>

        <section id="second">
          <h1>Skills</h1>
          <ul className="skills-list">
            <li>Web Design: HTML, css, JavaScript, React</li>
            <li>Coding Languages: Python, C, Java</li>
            <li>Other: </li>
          </ul>
        </section>

        <section id="third">
          <h1>Contacts</h1>
          <p>Email: amritapasupuleti@gmail.com</p>
          <p>Phone: +1(510)303-2490</p>
          <p>Discord: am1r1t3</p>
        </section>

        <section id="fourth">
          <h1>Links</h1>
          <p>LinkedIn:</p>
          <p>
            <a
              href="https://www.linkedin.com/in/amrita-pasupuleti-a74945291/"
              target="blank"
            >
              https://www.linkedin.com/in/amrita-pasupuleti-a74945291/
            </a>
          </p>
          <br></br>
          <p>GitHub:</p>
          <p>
            <a href="https://github.com/amrita-pasupuleti" target="blank">
              https://github.com/amrita-pasupuleti{" "}
            </a>{" "}
          </p>
        </section>

        <section id="fifth">
          <h1>About this Site</h1>
          <p>Any other information or details you'd like to share.</p>
          <p>Any other information or details you'd like to share.</p>
          <p>Any other information or details you'd like to share.</p>
          <p>Any other information or details you'd like to share.</p>
          <p>Any other information or details you'd like to share.</p>
          <p>Any other information or details you'd like to share.</p>
        </section>
      </div>
    </>
  );
};

export default Home;
