import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of your first project. Built with React and FastAPI.',
    repoLink: '#', // TODO: Update with actual GitHub link
    demoLink: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A brief description of the second project highlighting the technologies used and the problem it solves.',
    repoLink: '#',
    demoLink: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Another excellent web application developed to demonstrate frontend and backend skills.',
    repoLink: '#',
    demoLink: '#',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Additional project to showcase on the dedicated projects page.',
    repoLink: '#',
    demoLink: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>All My Projects & Repositories</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>A complete collection of my recent work</p>

      <div className="projects-grid">
        {projects.map((project) => (
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
    </section>
  );
};

export default Projects;
