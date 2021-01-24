import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Image from './image';
import TLink from './transition-link';

const StyledProjectSlide = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  margin: 40vh 0 10vh 0;
  overflow: hidden;
  /* opacity: 0; */
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
    cursor: pointer;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    backface-visibility: hidden;
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
  const [reveal, setReveal] = useState(false);
  const [hover, setHover] = useState(false);

  const loader = useRef(null);

  useEffect(() => {
    if (!loader) return;
    const observer = new IntersectionObserver(handleObserver, { root: null, rootMargin: "0px", threshold: .5 });

    if (loader.current) {
      observer.observe(loader.current)
    }
  }, []);
  
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setReveal(true);
    }
  }

  return (
    <TLink to={`/${project.title.toLowerCase()}`} color={project.color}>
      <StyledProjectSlide color={project.color} oddeven={oddeven} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} ref={loader}>
        <div className="project-slide__info">
          <div>
            <div className={`font-semibold text-xxl sm:text-heading ${reveal ? 'titlefadeup-enter-active' : 'fadeup-enter'}`}>{project.title}</div>
            <div className={`text-opacity text-sm sm:text-xxl ${reveal ? 'subtitlefadeup-enter-active ' : 'subtitlefadeup-enter '}`} style={{ transitionDelay: '200ms' }}>{project.shortDescription}</div>
          </div>
        </div>
        <div className="project-slide__cover">
          <Image filename={`${project.title}-cover.png`} alt={`${project.title} cover`} classes={`project-slide__cover-image ${reveal ? 'fade-enter-active' : 'fade-enter'}`} />
          <Image filename={`project__${project.title}.png`} alt={`${project.title} logo`} classes={`project-slide__logo  ${reveal ? 'logo-up-enter-active' : 'logo-up-enter'}`} />
          {project.type === 'web' && (
            <Image filename={`project-slide__${project.title}.png`} alt={`${project.title} image`} classes={`project-slide__image web ${reveal ? 'up-enter-active' : 'up-enter'} ${hover ? 'hover-active' : ''}`} />
          )}
          {project.type === 'phone' && (
            <div className="project-slide__image phone">
              <Image filename={`project-slide__${project.title}-2.png`} alt={`${project.title} image`} classes={`${reveal ? 'up-enter-active' : 'up-enter'} ${hover ? 'hover-active' : ''}`} />
              <Image filename={`project-slide__${project.title}-1.png`} alt={`${project.title} image`} classes={`${reveal ? 'up-enter-active' : 'up-enter'} ${hover ? 'hover-active' : ''}`} />
              <Image filename={`project-slide__${project.title}-3.png`} alt={`${project.title} image`} classes={`${reveal ? 'up-enter-active' : 'up-enter'} ${hover ? 'hover-active' : ''}`} />
            </div>
          )}
        </div>
      </StyledProjectSlide >
    </TLink>
  )
}

export default ProjectSlide;