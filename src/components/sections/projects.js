import React from 'react';

import ProjectSlide from '../project-slide';

const Projects = ({ projects }) => (
  <section className="py-20">
    {projects.map((project, i) => (
      <ProjectSlide className="" key={project.id} project={project} oddeven={i % 2 ? 'odd' : 'even'} />
    ))}
  </section>
)

export default Projects;