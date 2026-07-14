import React from 'react';
import { Link } from 'react-router-dom';
import { GitBranch } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container glass-panel" style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto', backdropFilter: 'blur(20px)' }}>
        <h1 className="text-gradient">Juan Carlos Alvarado Rucobo</h1>
        <p>
          Full Stack Developer & Software Engineer. Building modern, fast, and scalable web applications with cutting-edge technologies.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <a href="#" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <GitBranch size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
