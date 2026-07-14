import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: 1,
    title: 'Featured Project 1',
    description: 'An amazing web application built with React and FastAPI to solve complex problems.',
    repoLink: '#',
    demoLink: '#',
  },
  {
    id: 2,
    title: 'Featured Project 2',
    description: 'A scalable full-stack solution demonstrating proficiency in modern web architecture.',
    repoLink: '#',
    demoLink: '#',
  }
];

const FeaturedWork = () => {
  return (
    <section id="featured" className="section container">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Featured Work</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>A selection of my best projects</p>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <div key={project.id} className="project-card glass-panel">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
              <a href={project.repoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                <GitBranch size={20} /> Repo
              </a>
              <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/projects" className="btn btn-primary">View All Projects</Link>
      </div>
    </section>
  );
};

export default FeaturedWork;
