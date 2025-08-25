import React from 'react';

import styles from './About.module.css';
import { Contact } from './Contact';

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Amrita Pasupuleti</h1>
        <p className={styles.description}>
          I'm a fourth year Computer Science student at the University of
          California, Santa Cruz and a former software engineer intern at
          Capital One. I also enjoyed being an AI researcher and Computer
          Science Tutor at UCSC, in addition to helping build full stack
          applications for various projects.
        </p>
      </div>
      <div>
        <Contact />
      </div>
      <div className={styles.topBlur} />
    </section>
  );
};
