import React from 'react';
import Card from '../../components/atoms/Card/Card.jsx';
import Button from '../../components/atoms/Button/Button.jsx';
import { projectsContent } from '../../assets/data/projectsData.js';
import styles from './styles.module.scss';

const ProjectDetails = ({ details }) => (
  <div className={styles.details}>
    {details.map(detail => (
      <React.Fragment key={detail.heading}>
        <h4>{detail.heading}</h4>
        <p>{detail.text}</p>
      </React.Fragment>
    ))}
  </div>
);

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>{projectsContent.title}</h2>
      <div className={styles.grid}>
        {projectsContent.projects.map((project) => (
          <Card key={project.title}>
            <div className={styles.project}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <ProjectDetails details={project.details} />
              <div className={styles.cta}>
                <Button variant="secondary">{projectsContent.cta}</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
