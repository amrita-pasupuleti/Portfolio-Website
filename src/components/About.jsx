import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../utils";
import { Contact } from "./Contact";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Amrita Pasupuleti</h1>
        <p className={styles.description}>
          I'm a third year Computer Science major at the University of
          California, Santa Cruz. I primarily code in Python and C, and I have
          experience with AI and web development.
        </p>
      </div>
      <div>
        <Contact />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
