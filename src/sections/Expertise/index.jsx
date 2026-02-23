import React from 'react';
import Section from '../../components/organisms/Section/Section.jsx';
import { expertiseContent } from '../../assets/data/expertiseData.js';
import styles from './styles.module.scss';

const Expertise = () => {
  return (
    <Section className={styles.expertise}>
      <h2 className={styles.title}>{expertiseContent.title}</h2>
      <div className={styles.grid}>
        {expertiseContent.categories.map((category) => (
          <div key={category.title} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <ul className={styles.skillList}>
              {category.skills.map((skill) => (
                <li key={skill} className={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Expertise;
