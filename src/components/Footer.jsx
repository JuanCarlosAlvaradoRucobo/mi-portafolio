import React from 'react';
import { User, GitBranch, Mail, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container">
        <h3>Juan Carlos Alvarado Rucobo</h3>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
          Building the future of the web, one line of code at a time.
        </p>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/juan-carlos-alvarado-rucobo-277b04209/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <User size={28} />
          </a>
          <a href="https://www.upwork.com/freelancers/~017a16258884e4663a" className="social-icon" aria-label="Upwork" target="_blank" rel="noopener noreferrer">
            <Briefcase size={28} />
          </a>
          <a href="https://github.com/JuanCarlosAlvaradoRucobo" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <GitBranch size={28} />
          </a>
          <a href="mailto:rucoboalvarado@gmail.com" className="social-icon" aria-label="Email">
            <Mail size={28} />
          </a>
        </div>
        
        <div style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          &copy; {new Date().getFullYear()} Juan Carlos Alvarado Rucobo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
