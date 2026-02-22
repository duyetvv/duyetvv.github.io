import React from 'react';
import Card from '../components/atoms/Card/Card';
import Button from '../components/atoms/Button/Button';
import styles from './Projects.module.scss';

const projectData = [
  {
    title: 'Enterprise Frontend Architecture Framework',
    description: 'Designed and institutionalized a scalable ReactJS & React Native architecture adopted across multiple enterprise projects.',
    problem: 'New projects faced inconsistent architectures, leading to slow setup times, duplicated effort, and maintenance challenges across teams.',
    approach: 'Architected a reusable, micro-frontend-inspired framework with a standardized component library, state management patterns, and CI/CD workflows using Azure DevOps.',
    impact: 'Reduced new project setup time by 40%, improved code reusability, and unified development standards for teams of up to 20 engineers.'
  },
  {
    title: 'Award-Winning Oil & Gas Platform',
    description: 'Led the frontend development for a nationally awarded digital transformation project in the Oil & Gas sector.',
    problem: 'The client required a modern, robust, and performant application to replace a legacy system, manage complex operational data, and support hybrid mobile access.',
    approach: 'Utilized React Native to build a cross-platform mobile application and ReactJS for the web dashboard, ensuring a consistent user experience. Implemented a contract-first API approach to de-couple frontend and backend development streams.',
    impact: 'Delivered a high-impact solution that earned national recognition, streamlined user workflows, and significantly reduced integration bottlenecks.'
  }
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Selected Projects</h2>
      <div className={styles.grid}>
        {projectData.map((project, index) => (
          <Card key={index}>
            <div className={styles.project}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.details}>
                <h4>Problem</h4>
                <p>{project.problem}</p>
                <h4>Approach & Architecture</h4>
                <p>{project.approach}</p>
                <h4>Impact</h4>
                <p>{project.impact}</p>
              </div>
              <div className={styles.cta}>
                <Button variant="secondary">View Case Study</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
