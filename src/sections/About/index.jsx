import React from 'react';
import Section from '../../components/organisms/Section/Section.jsx';
import { aboutData } from '../../assets/data/aboutData.js';
import styles from './styles.module.scss';

const About = () => {
  return (
    <Section className={styles.about}>
      <div className={styles.content}>
        <h2 className={styles.title}>{aboutData.title}</h2>
        <div className={styles.text}>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
