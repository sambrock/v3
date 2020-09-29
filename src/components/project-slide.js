import React, { useState } from 'react';
import styled from 'styled-components';
import Image from './image';
import { useSpring, animated } from 'react-spring';

const StyledProjectSlide = styled.div`
  height: calc(100vh - 6rem);
  background: ${props => props.color};
  display: ${props => props.isActive ? 'grid' : 'none'};
  grid-template-rows: 1fr 3rem;
  padding: 3rem 0 3rem 3rem;

  h2 {
    grid-row: 2;
    color: var(--white);
    z-index: 1;
  }

  .project-slide__img  {
    width: calc(100% + 35px);
    z-index: 1;
    margin: 0 0 3rem 0;

    img {
      height: 100%;
    }
  }

  .project-slide__mask {
    height: 100%;
    left: 0;
    width: 100%;
    z-index: 10;
    background: var(--white);
    position: absolute;
    top: 0;
  }
`;

const ProjectSlide = ({ project, isActive, animate, current, indicator, isAnimating, disableSlideAnimation }) => {
  const [disableLink, setDisableLink] = useState(true);

  const props = useSpring(isActive ? {clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', from: {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}} : '');

  return (
    <StyledProjectSlide color={project.color} isActive={isActive}>
      <Image filename={`project-slide__${project.title}.png`} alt={project.title} classes="project-slide__img web" />
      <h2 class="middle-heading">{project.title}</h2>
      <animated.div className="project-slide__mask" style={props}></animated.div>
    </StyledProjectSlide>
  )
}

export default ProjectSlide;