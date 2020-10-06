import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import ProjectSlide from './project-slide';

const Projects = ({ projects }) => (
  projects.map((project, i) => (
    <ProjectSlide className="project-slide" key={project.id} project={project} oddeven={i % 2 ? 'odd' : 'even'} />
  ))
)

export default Projects;