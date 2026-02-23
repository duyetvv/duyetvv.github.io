import React from 'react';
import Button from '../../components/atoms/Button/Button.jsx';
import { heroData } from '../../assets/data/heroData.js';
import styles from './styles.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{heroData.title}</h1>
        <p className={styles.subtitle}>{heroData.subtitle}</p>
        <div className={styles.cta}>
          <Button>{heroData.cta}</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
