import React, { useEffect } from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
