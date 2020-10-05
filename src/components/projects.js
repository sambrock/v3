import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { animated,  useSpring } from 'react-spring';

import ProjectSlide from './project-slide';
import LogoTransparent from '../images/logo-w.svg';

const StyledProjectsContainer = styled(animated.section)`
  height: calc(100vh);
  position: relative;
  /* margin: 0 3rem 0 0; */
  overflow: hidden;
  background:var(--off-white) url(${LogoTransparent}) no-repeat center;
  background-size: 100% calc(100vh - 6rem);
  padding: 0 3rem;
  mix-blend-mode: multiply;

  .projects__slider {
    overflow: auto;
    overflow-x: hidden;
    cursor: grab;
    touch-action: pan-x;
    margin: 0 4rem;
  }
`;

const Projects = ({ projects }) => {
  const [sliderPosY, setSliderPosY] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  let sliderRef = useRef();
  let mouseDownPos;
  let sliderPos;

  const getSliderPositions = () => {
    const increment = sliderRef.current.offsetHeight / projects.length;
    let arr = [];
    let i;

    for (i = 0; i < projects.length; i++) {
      arr.push(-Math.abs(i * increment))
    }

    return arr;
  }

  const handleMouseDown = (e) => {
    mouseDownPos = e.clientY;
    sliderRef.current.style.cursor = 'grabbing';

    setMouseDown(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };


  const handleMouseMove = (e) => {
    const dy = e.clientY - mouseDownPos;
    sliderPos = sliderPosY + (dy * 4);
    setSliderPosY(sliderPos);
  };

  const handleMouseUp = () => {
    const closest = getSliderPositions().sort((a, b) => Math.abs(sliderPos - a) - Math.abs(sliderPos - b))[0];
    setSliderPosY(closest);

    setMouseDown(false);

    sliderRef.current.style.cursor = 'grab';

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const props = useSpring(mouseDown ? { transform: `translate(0px, ${sliderPosY}px)`, config: { mass: 1, tension: 40 } } : { transform: `translate(0px, ${sliderPosY}px)`, config: { mass: 1, tension: 200 } });

  return (
    <StyledProjectsContainer>
      <animated.div className="projects__slider" style={props} ref={sliderRef} onMouseDown={(e) => handleMouseDown(e)}>
        {projects.map((project, i) => (
          <ProjectSlide key={project.id} project={project} />
        ))}
      </animated.div>
    </StyledProjectsContainer >
  )
}

export default Projects;