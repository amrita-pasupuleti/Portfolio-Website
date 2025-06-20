import React from 'react';

import styles from './About.module.css';
import { Contact } from './Contact';

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Amrita Pasupuleti</h1>
        <p className={styles.description}>
          I'm a third year Computer Science student at the University of
          California, Santa Cruz. I am currently working as a software engineer
          intern at Capital One. I also enjoyed being an AI researcher and
          Computer Science Tutor at UCSC, in addition to helping build full
          stack applications for various projects.
        </p>
      </div>
      <div>
        <Contact />
      </div>
      <div className={styles.topBlur} />
    </section>
  );
};
