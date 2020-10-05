import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, useChain } from 'react-spring';
import { rgba } from 'polished'

import Image from './image';

const StyledProjectSlide = styled.div`
  height: 100vh;
  display: flex;

  .inner {
    height: calc(100vh - 15rem);
    margin: auto;
    background: ${props => rgba(`${props.color}`, .82)};
    display: grid;
    grid-template-rows: 1fr auto;
    padding: 3rem 0 3rem 3rem;
    width: 100%;
    
    & > * {
      user-drag: none; 
      user-select: none;
    }

    .project-slide__img  {
      width: calc(100% + 200px);
      margin: 0 0 2rem 0;

      img {
        height: 100%;
        user-drag: none; 
        user-select: none;
      }

      &.phone {
        display: flex;
        position: relative;

        .gatsby-image-wrapper {
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

const ProjectSlide = ({ project }) => {
  return (
    <StyledProjectSlide color={project.color}>
      <div className="inner">
        {project.type === 'web' && (
          <Image filename={`project-slide__${project.title}.png`} alt={project.title} classes="project-slide__img web" />
        )}
        {project.type === 'phone' && (
          <div className="project-slide__img phone">
            <Image filename={`project-slide__${project.title}-1.png`} alt={project.title} />
            <Image filename={`project-slide__${project.title}-2.png`} alt={project.title} />
            <Image filename={`project-slide__${project.title}-3.png`} alt={project.title} />
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