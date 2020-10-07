import { Link, navigate } from 'gatsby';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Image from './image';

const StyledProjectSlide = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  margin: 40vh 0 10vh 0;
  overflow: hidden;

  @media(max-width: 768px) {
    margin: 0 0 15vh 0;
  }

  @media(max-width: 480px) {
    grid-template-columns: 1fr;
  }

  .project-slide__cover {
    background: ${props => props.color};
    ${({ oddeven }) => oddeven === 'odd' && `grid-column: 1 / span 2;`}
    ${({ oddeven }) => oddeven === 'even' && `grid-column: 2 / span 2;`}
    position: relative;
    grid-row: 1;
    overflow: hidden;

    img {
      width: 100%;
    }

    @media(max-width: 480px) {
      grid-column: 1;
    }

    .project-slide__logo {
      position: absolute !important;
      top: 5%;
      left: 5%;
      height: 25%;
      width: 70%;

      img {
        max-height: 100%;
        max-width: 100%;
        width: auto;
        padding: auto 0;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }

    .project-slide__image.web  {
      position: absolute !important;
      top: 40%;
    }

    .project-slide__image.phone  {
      display: flex;
      justify-content: center;
      width: 100%;
      position: absolute !important;
      top: 40%;

      .gatsby-image-wrapper{
        width: 35%;
        z-index: 4;
          &:nth-child(1) {
            margin:  10% -10% 0;
            z-index: 3;
          }
          &:nth-child(3) {
            margin:  10% -10% 0;
            z-index: 3;
          }
        }
      }
    }

  .project-slide__info {
    ${({ oddeven }) => oddeven === 'odd' && `grid-column: 3; margin: 0 0 0 63px;`}
    ${({ oddeven }) => oddeven === 'even' && `grid-column: 1; margin: 0 63px 0 auto;`}
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 480px) {
      grid-column: 1;
      grid-row: 2;
      margin: 12.5px 0 0 0;
    }
  }
`;


const ProjectSlide = ({ project, oddeven }) => {
  return (
    <StyledProjectSlide color={project.color} oddeven={oddeven}>
      <div className="project-slide__info">
        <div>
          <div class="title"><Link to={`/${project.title.toLowerCase()}`}>{project.title}</Link></div>
          <div class="sub-title">{project.shortDescription}</div>
        </div>
      </div>
      <div className="project-slide__cover" onClick={() => navigate(`/${project.title.toLowerCase()}`)}>
        <Image filename={`${project.title}-cover.png`} alt={`${project.title} cover`} classes="project-slide__cover-image" />
        <Image filename={`project__${project.title}.png`} alt={`${project.title} cover`} classes="project-slide__logo" />
        {project.type === 'web' && (
          <Image filename={`project-slide__${project.title}.png`} alt={`${project.title} cover`} classes="project-slide__image web" />
        )}
        {project.type === 'phone' && (
          <div className="project-slide__image phone">
            <Image filename={`project-slide__${project.title}-2.png`} alt={`${project.title} cover`} />
            <Image filename={`project-slide__${project.title}-1.png`} alt={`${project.title} cover`} />
            <Image filename={`project-slide__${project.title}-3.png`} alt={`${project.title} cover`} />
          </div>
        )}
      </div>
    </StyledProjectSlide>
  )
}

export default ProjectSlide;