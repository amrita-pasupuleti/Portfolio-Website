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
          <h1>About Me</h1>
          <p className="AboutContent">
            Hi, my name is Amrita Pasupuleti! I'm a third-year computer science
            major at the University of California, Santa Cruz. I am always
            looking forward to acquiring more skills and learning everything I
            can!
          </p>
          <p>&nbsp;</p>
          <p>Contact me at amritapasupuleti@gmail.com.</p>
        </section>

        <section>
          <h1>Skills</h1>
          <ul className="class-list">
            <li>C</li>
            <li>C++</li>
            <li>Python: Pandas and Machine Learning</li>
            <li>JavaScript, React</li>
            <li>UI/UX Design</li>
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
          <p className="aboutSiteContent">
            The data from the other pages on this website are stored using
            &nbsp;
            <a className="links" href="https://supabase.com/" target="blank">
              supabase.
            </a>
          </p>
          <p>
            I used&nbsp;
            <a className="links" href="https://vercel.com/" target="blank">
              Vercel
            </a>
            &nbsp;to publish the website.
          </p>
          <p>
            Find the source code on github&nbsp;
            <a
              className="links"
              href="https://github.com/amrita-pasupuleti/personalWebsite"
              target="blank"
            >
              here.
            </a>
          </p>
          <p>Don't forget to check back later for more updates!</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
