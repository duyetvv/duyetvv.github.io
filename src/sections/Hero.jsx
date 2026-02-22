import React from 'react';
import Button from '../components/atoms/Button/Button';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          I build resilient frontend architecture for high-impact products.
        </h1>
        <p className={styles.subtitle}>
          With over 8 years of experience, I architect and lead the development of scalable ReactJS and React Native ecosystems for enterprise-level applications, bridging complex business objectives with elegant technical execution.
        </p>
        <div className={styles.cta}>
          <Button>Explore My Work</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
