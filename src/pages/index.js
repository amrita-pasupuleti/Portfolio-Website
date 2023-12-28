import React from "react";
import "./Home-style.css";
/*Logos*/
import gmail from "./gmailicon.png";
import linkedin from "./linkedin.png";
import github from "./github.png";

const Home = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
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
          <li>
            <a href="mailto: amritapasupuleti@gmail.com">
              <img
                src={gmail}
                height={100}
                width={100}
                className="contactBtn"
                alt="email"
              />
            </a>
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
          <p>&nbsp;</p>
          <p>Contact me at amritapasupuleti@gmail.com.</p>
        </section>

        <section id="skills">
          <h1>Skills</h1>
          <ul className="skills-list">
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>JavaScript, React</li>
            <li>HTML, CSS</li>
          </ul>
        </section>

        <section id="fifth">
          <h1>About this Site</h1>
          <p className="aboutSiteContent">
            I created this website using React, a javaScript library.
          </p>
          <p className="aboutSiteContent">
            The data from the other pages on this website are stored using
            supabase.&nbsp;
            <a className="links" href="https://supabase.com/" target="blank">
              Check out their website here!
            </a>
          </p>
          <p>
            I used Netflify to publish the website.&nbsp;
            <a className="links" href="https://www.netlify.com/" target="blank">
              Check it out here!
            </a>
          </p>
          <p>
            Find the source code&nbsp;
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

      <div className="right-sidebar">
        <p>
          Feel free to explore and don't forget to check back later for more
          content:)
        </p>
      </div>
    </div>
  );
};

export default Home;
