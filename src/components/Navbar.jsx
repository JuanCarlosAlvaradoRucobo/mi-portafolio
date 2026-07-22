import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar glass-panel">
      <div className="container">
        {/* Toggle dark/light mode on the top left */}
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>

        <div className="nav-links">
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <a href="C:\Users\ARCar\OneDrive\Documents\PaginaProfesional\public\Curriculum_Alvarado_Rucobo_Juan_Carlos.pdf" target="_blank" rel="noopener noreferrer">
            CV
          </a>
          <a href="https://portafolio-juan-carlos-alvarado-ruc.vercel.app" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
