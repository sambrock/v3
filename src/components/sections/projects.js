import React from 'react';

import ProjectSlide from '../project-slide';

const Projects = ({ projects }) => (
  <section>
    {projects.map((project, i) => (
      <ProjectSlide className="project-slide" key={project.id} project={project} oddeven={i % 2 ? 'odd' : 'even'} />
    ))}
  </section>
)

export default Projects;