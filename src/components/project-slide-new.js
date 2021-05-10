import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Image from './image';
import TLink from './transition-link';

const ProjectSlide = ({ project }) => {
  return (
    <TLink to={`/${project.title.toLowerCase()}`} color={project.color}>
      <div className="h-96" style={{background: project.color}}>

      </div>
    </TLink>
  )
}

export default ProjectSlide;