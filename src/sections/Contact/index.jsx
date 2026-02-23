import React from 'react';
import Button from '../../components/atoms/Button/Button.jsx';
import { contactData } from '../../assets/data/contactData.js';
import styles from './styles.module.scss';

const Contact = () => {
  const handleGetInTouch = () => {
    window.location.href = `mailto:${contactData.email}`;
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>{contactData.title}</h2>
      <p className={styles.subtitle}>{contactData.subtitle}</p>
      <div className={styles.cta}>
        <Button onClick={handleGetInTouch}>
          {contactData.cta}
        </Button>
      </div>
      <footer className={styles.footer}>
        <div className={styles.links}>
          {contactData.socials.map(social => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
              {social.name}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} {contactData.footer}</p>
      </footer>
    </section>
  );
};

export default Contact;
