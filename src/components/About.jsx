import React from 'react';

import styles from './About.module.css';
import { Contact } from './Contact';

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Amrita Pasupuleti</h1>
        <p className={styles.description}>
          I'm a recent grad from the University of California, Santa Cruz and a
          current software engineer at Capital One. I am also in the online
          Computer Science Master's program at Georgia Tech.
        </p>
      </div>
      <div>
        <Contact />
      </div>
      <div className={styles.topBlur} />
    </section>
  );
};
