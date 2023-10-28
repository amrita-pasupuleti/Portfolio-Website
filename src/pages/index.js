import React from "react";
import "./Home-style.css";

const Home = () => {
  return (
    <div className="container">
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
          <p className="AboutContent">
            Hi, my name is Amrita Pasupuleti! I'm a second-year computer science
            major at the University of California, Santa Cruz. I like to read
            and play video games in my free time. I am always looking forward to
            acquiring more skills and learning everything I can!
          </p>
        </section>

        <section id="second">
          <h1>Skills</h1>
          <ul className="skills-list">
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>JavaScript, React</li>
            <li>HTML, CSS</li>
          </ul>
        </section>

        <section id="third">
          <h1>Contacts</h1>
          <ul className="contactsList">
            <li>
              <p>Email:</p>
              <a className="links" href="amritapasupuleti@gmail.com">
                amritapasupuleti@gmail.com
              </a>
            </li>
            <li>
              <p>Phone: </p>
              <p>+1(510)303-2490</p>
            </li>
            <li>
              <p>Discord:</p>
              <p>am1r1t3</p>
            </li>
          </ul>
        </section>

        <section id="fourth">
          <h1>Links</h1>
          <ul className="contactsList">
            <li>
              <p>LinkedIn:</p>
              <p>
                <a
                  className="links"
                  href="https://www.linkedin.com/in/amrita-pasupuleti-a74945291/"
                  target="blank"
                >
                  https://www.linkedin.com/in/amrita-pasupuleti-a74945291/
                </a>
              </p>
            </li>
            <li>
              <p>GitHub:</p>
              <p>
                <a
                  className="links"
                  href="https://github.com/amrita-pasupuleti"
                  target="blank"
                >
                  https://github.com/amrita-pasupuleti
                </a>
              </p>
            </li>
          </ul>
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

      <div className="right-sidebar">
        <p>Check back later for more content:)</p>
      </div>
    </div>
  );
};

export default Home;
