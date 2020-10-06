import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, useChain, useTrail } from 'react-spring';
import { rgba } from 'polished'

import Image from './image';

const StyledProjectSlide = styled(animated.div)`
  height: 100vh;
  display: flex;

  .inner {
    height: calc(100vh - 15rem);
    margin: auto;
    background: ${props => rgba(`${props.color}`, 1)};
    display: grid;
    grid-template-rows: 1fr auto;
    padding: 3rem 0 3rem 3rem;
    width: 100%;
    
    & > * {
      user-drag: none; 
      user-select: none;
    }

    .project-slide__img  {
      overflow: hidden;
      position: relative;
      margin: 0 0 2rem 0;
      width: calc(100% + 200px);
      
      .gatsby-image-wrapper {
        height: 100%;

        img {
          height: 100%;
          user-drag: none; 
          user-select: none;
        }
      }

      &.phone {
        display: flex;
        position: relative;
        overflow: visible;

        div {
          position: relative;
          height: 100%;
          width: 100%;
          
          position: absolute !important;

          &:nth-child(1) {
            margin: 0 0 0 0;
          }

          &:nth-child(2) {
            left: 25%;
          }

          &:nth-child(3) {
            left: 50%;
          }
        }

        img {
          height: 100%;
        }
      }
    }
  }
`;

const StyledProjectInfo = styled.div`
  display: flex;
  flex-direction: column;

  .project-slide__short-description {
    color: var(--white-light);
    margin: 0 0 1rem 0;
    display: inline-block;
    font-weight: 600;
  }

  h2 {
    grid-row: 2;
    color: var(--white);
    z-index: 1;
    line-height: .7;
  }
`;

const ProjectSlide = ({ project, animating }) => {
  const [hover, setHover] = useState(false);

  // const scrollProps = useSpring(animating ? { clipPath: 'polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%)' } : { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
  const hoverProps = useSpring(hover ? { transform: `translate(-25px, 0px)` } : { transform: `translate(0px, 0px)` });
  const trailHoverProps = useTrail(3, hover ? { transform: `translate(-25px, 0px)` } : { transform: `translate(0px, 0px)` });
  console.log(trailHoverProps);

  return (
    <StyledProjectSlide color={project.color}>
      <div className="inner" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        {project.type === 'web' && (
          <animated.div className="project-slide__img web" style={hoverProps}>
            <Image filename={`project-slide__${project.title}.png`} alt={project.title} />
          </animated.div>
        )}
        {project.type === 'phone' && (
          <div className="project-slide__img phone">
            <animated.div style={trailHoverProps[0]}><Image filename={`project-slide__${project.title}-1.png`} alt={project.title} /></animated.div>
            <animated.div style={trailHoverProps[1]}><Image filename={`project-slide__${project.title}-2.png`} alt={project.title} /></animated.div>
            <animated.div style={trailHoverProps[2]}><Image filename={`project-slide__${project.title}-3.png`} alt={project.title} /></animated.div>
          </div>
        )}
        <StyledProjectInfo>
          <span className="project-slide__short-description">{project.shortDescription}</span>
          <h2 className="title">{project.title}</h2>
        </StyledProjectInfo>
      </div>
    </StyledProjectSlide>
  )
}

export default ProjectSlide;