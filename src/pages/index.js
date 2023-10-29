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
            <a href="#contacts">Contacts</a>
          </li>
          <li>
            <a href="#links">Links</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
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

        <section id="contacts">
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

        <section id="links">
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
