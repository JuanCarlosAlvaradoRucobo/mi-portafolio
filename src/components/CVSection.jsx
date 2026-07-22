import React from 'react';
import { FileText, Download } from 'lucide-react';

const CVSection = () => {
  return (
    <section id="cv" className="section container">
      <div className="cv-section glass-panel">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Resume & Portfolio</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Download my updated CV and check out my PDF evidence portfolio.
        </p>
        <div className="cv-actions">
          {/* TODO: Place the actual cv.pdf in the public folder and update href */}
          <a href="https://portafolio-juan-carlos-alvarado-ruc.vercel.app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <FileText size={20} /> View portfolio
          </a>
          {/* TODO: Place the actual portafolio.pdf in the public folder and update href */}
          <a href="/Curriculum_Alvarado_Rucobo_Juan_Carlos.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <Download size={20} /> CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
