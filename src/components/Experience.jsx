import React from "react";

import styles from "./Experience.module.css";
import skills from "../data/skills.json";
import history from "../data/exp.json";
import { getImageUrl } from "../utils";

export const Experience = () => {
  return (
    <>
      <div className={styles.ExpContainer} id="experience"></div>
      <section className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
          <ul className={styles.history}>
            {history.map((historyItem, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <div className={styles.historyItemDetails}>
                    <h3>{historyItem.role}</h3>
                    <p>{historyItem.organisation}</p>

                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experience.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
