import React from 'react';

import styles from './Education.module.css';

export const Education = () => {
  return (
    <div id='education'>
      <div className={styles.educationContainer}></div>
      <section className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
          <div className={styles.firstContainer}>
            <h1>Georgia Insitute of Technology</h1>
            <h2>
              <i>Computer Science M.S. (OMSCS)</i>
            </h2>
            <h3>Jan 2026 - Present</h3>
            <h1>University of California, Santa Cruz</h1>
            <h2>
              <i>Computer Science B.S.</i>
            </h2>
            <h3>Sep 2022 - Dec 2025</h3>
            <h3>GPA: 3.75</h3>
          </div>
          <div className={styles.secondContainer}>
            <h3>Relevant Coursework</h3>
            <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}>
                <a
                  href='https://omscs.gatech.edu/cs-6340-software-analysis'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CS 6340 -- Software Analysis and Testing
                </a>
              </li>
              <li className={styles.aboutItem}>
                <a
                  href='https://courses.engineering.ucsc.edu/courses/cse101'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CSE 101 -- Data Structures and Algorithms in C/C++
                </a>
              </li>
              <li className={styles.aboutItem}>
                <a
                  href='https://courses.engineering.ucsc.edu/courses/cse130/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CSE 130 -- Computer Systems Design
                </a>
              </li>
              <li className={styles.aboutItem}>
                <a
                  href='https://courses.engineering.ucsc.edu/courses/cse180'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CSE 180 -- Database Systems
                </a>
              </li>
              <li className={styles.aboutItem}>
                <a
                  href='https://courses.engineering.ucsc.edu/courses/cse186'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CSE 186 -- Full Stack Web Development 1
                </a>
              </li>
              <li className={styles.aboutItem}>
                <a
                  href='https://selfservice.ohlone.edu:8443/student/Courses/Search?subjects=CS'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CS 146 (Ohlone College) -- Unix/Linux
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
