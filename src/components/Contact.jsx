import React from 'react';

import styles from './Contact.module.css';
import { getImageUrl } from '../utils';

export const Contact = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt='Email icon' />
          <p>amritapasupuleti@gmail.com</p>
        </li>
        <li
          className={styles.clickLink}
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/amrita-pasupuleti/',
              '_blank',
              'noopener,noreferrer'
            )
          }
          role='link'
          tabIndex={0}
        >
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt='LinkedIn icon'
          />
          <p>LinkedIn</p>
        </li>

        <li
          className={styles.clickLink}
          onClick={() =>
            window.open(
              'https://github.com/amrita-pasupuleti',
              '_blank',
              'noopener,noreferrer'
            )
          }
          role='link'
          tabIndex={0}
        >
          <img src={getImageUrl('contact/githubIcon.png')} alt='GitHub icon' />
          <p>GitHub</p>
        </li>
      </ul>
    </footer>
  );
};
