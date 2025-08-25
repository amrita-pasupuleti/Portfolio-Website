import React from 'react';

import styles from './Projects.module.css';
import projects from '../data/projects.json';
import { getImageUrl } from '../utils';

// ProjectCard Component
const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <a
      href={source}
      className={styles.link}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>

        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </a>
  );
};

// Projects Component
const Projects = () => {
  return (
    <section className={styles.containerone} id='projects'>
      <h2 className={styles.titleone}>Projects</h2>
      <div className={styles.projectsone}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export { Projects, ProjectCard };
