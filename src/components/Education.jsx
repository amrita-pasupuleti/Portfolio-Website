import React from "react";

import styles from "./Education.module.css";

export const Education = () => {
  return (
    <div id="education">
      <div className={styles.educationContainer}></div>
      <section className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
          <div className={styles.firstContainer}>
            <h1>University of California, Santa Cruz</h1>
            <h2>Computer Science B.S.</h2>
            <h3>GPA: 3.75</h3>
          </div>
          <div className={styles.secondContainer}>
            <h3>Relevant Coursework</h3>
            <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}>
                CSE 101 -- Data Structures and Algorithms in C/C++
              </li>
              <li className={styles.aboutItem}>
                CSE 130 -- Computer Systems Design in C
              </li>
              <li className={styles.aboutItem}>
                CSE 13s -- Computer Systems and C Programming
              </li>
              <li className={styles.aboutItem}>
                CSE 30 -- Programming Abstractions: Python
              </li>
              <li className={styles.aboutItem}> CSE 40 -- Machine Learning </li>
              <li className={styles.aboutItem}>
                CSE 120 -- Computer Architecture
              </li>
              <li className={styles.aboutItem}>
                CS 146 (Ohlone college) -- Unix/Linux
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
