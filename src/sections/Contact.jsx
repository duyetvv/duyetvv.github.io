import React from 'react';
import Button from '../components/atoms/Button/Button';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Have a complex challenge?</h2>
      <p className={styles.subtitle}>Let's talk about how I can help you build the future.</p>
      <div className={styles.cta}>
        <Button onClick={() => window.location = 'mailto:duyetvv@outlook.com'}>
          Get In Touch
        </Button>
      </div>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/duyetvv/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/duyetvv" target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* <a href="#" target="_blank" rel="noopener noreferrer">Resume</a> */}
        </div>
        <p>&copy; {new Date().getFullYear()} Vo Van Duyet. Built with React & lots of coffee.</p>
      </footer>
    </section>
  );
};

export default Contact;
