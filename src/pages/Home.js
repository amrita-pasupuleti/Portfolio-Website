import React from "react";
import "./Home.css";
/*Logos*/
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

const Home = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li className="name">
            <div className="name1">
              <h2>Amrita Pasupuleti</h2>
              <h3>amritapasupuleti@gmail.com</h3>
            </div>

            <h3>Computer Science, B.S.</h3>
            <h3>University of California, Santa Cruz</h3>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/amrita-pasupuleti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                height={100}
                width={100}
                className="contactBtn"
                alt="linkedIn"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/amrita-pasupuleti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                height={100}
                width={100}
                className="contactBtn"
                alt="git"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="content">
        <section>
          <h1>Skills</h1>
          <ul className="class-list">
            <li>Programming Languages: Python, C, Java, SQL, Linux</li>
            <li>Machine Learning and Data Science: Pandas, pyTorch, SNNs </li>
            <li>Web Development: HTML, css, React JS, posgresQL APIs</li>
          </ul>
        </section>

        <section>
          <h1>Relevant Coursework</h1>
          <ul className="class-list">
            <li>CSE 101: Data Structures in C and C++ </li>
            <li>CSE 130: Computer System Design in C</li>
            <li>
              CSE 30: Python: Programming Abstractions and Data Structures
            </li>
            <li>CSE 13s: Computer Systems and C Programming</li>
            <li>CSE 40: Machine Learning</li>
            <li>CSE 120: Computer Architecture</li>
            <li>CS 146 (ohlone college): Unix/Linux</li>
          </ul>
        </section>

        <section>
          <h1>About this Site</h1>
          <p className="aboutSiteContent">
            I created this website using React.js.
          </p>
          <p>
            <a
              className="links"
              href="https://github.com/amrita-pasupuleti/personalWebsite"
              target="blank"
            >
              This is the GitHub link.
            </a>
          </p>
          <p>
            I used&nbsp;
            <a className="links" href="https://vercel.com/" target="blank">
              Vercel
            </a>
            &nbsp;to publish the website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
