import React from 'react';
import Section from '../components/organisms/Section/Section';
import styles from './Expertise.module.scss';

const expertiseData = [
  {
    title: 'Frontend & Mobile Architecture',
    skills: ['ReactJS', 'React Native', 'Angular', 'Flutter', 'Micro-frontend Design', 'Scalable State Management']
  },
  {
    title: 'Backend Collaboration & DevOps',
    skills: ['NodeJS (NestJS/Express)', 'RESTful APIs', 'Contract-first Development', 'Azure DevOps', 'CI/CD Pipelines']
  },
  {
    title: 'Leadership & Quality Assurance',
    skills: ['Agile/Scrum Delivery', 'Team Leadership & Mentorship', 'Code Governance', 'Performance Optimization', 'Reusable Component Systems']
  }
];

const Expertise = () => {
  return (
    <Section className={styles.expertise}>
      <h2 className={styles.title}>Core Competencies</h2>
      <div className={styles.grid}>
        {expertiseData.map((category, index) => (
          <div key={index} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <ul className={styles.skillList}>
              {category.skills.map((skill, i) => (
                <li key={i} className={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Expertise;
