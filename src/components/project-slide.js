import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Image from './image';
import TLink from './transition-link';

const StyledProjectSlide = styled.div`
  grid-template-columns: 2fr 1fr 2fr;
  margin: 200px 0 200px 0;

  @media(max-width: 768px) {
    margin: 0 0 15vh 0;
  }
  @media(max-width: 480px) {
    grid-template-columns: 1fr;
    margin: 0 0 8vh 0;
  }
`;

const StyledProjectInfo = styled.div`
  ${({ oddeven }) => oddeven === 'odd' && `grid-column: 3; margin: 0 0 0 63px;`}
  ${({ oddeven }) => oddeven === 'even' && `grid-column: 1; margin: 0 63px 0 auto;`}
  @media(max-width: 480px) {
    grid-column: 1;
    margin: 12.5px 0 0 0;
  }
`;

const StyledProjectLogo = styled.div`
  div {
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
`;

const StyledProjectCover = styled.div`
    background: ${props => props.color};
    ${({ oddeven }) => oddeven === 'odd' && `grid-column: 1 / span 2;`}
    ${({ oddeven }) => oddeven === 'even' && `grid-column: 2 / span 2;`}
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    img {
      width: 100%;
    }
    @media(max-width: 480px) {
      grid-column: 1;
    }
`;

const StyledProjectImageWeb = styled.div`
  position: absolute !important;
  top: 40%;
`;

const StyledProjectImagePhone = styled.div`
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
`;


const ProjectSlide = ({ project, oddeven }) => {
  const [reveal, setReveal] = useState(false);
  const [hover, setHover] = useState(false);

  const loader = useRef(null);

  useEffect(() => {
    if (!loader) return;
    const observer = new IntersectionObserver(handleObserver, { root: null, rootMargin: "0px", threshold: .1 });

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
      <StyledProjectSlide className="grid overflow-hidden" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} ref={loader}>
        <StyledProjectInfo color={project.color} oddeven={oddeven} className="row-span-2 mt-6 sm:mt-0 sm:row-span-1 flex flex-col justify-center">
          <div className={`font-semibold text-xxl sm:text-heading ${reveal ? 'titlefadeup-enter-active' : 'fadeup-enter'}`}>{project.title}</div>
          <div className={`text-opacity text-sm sm:text-xxl font-semibold ${reveal ? 'subtitlefadeup-enter-active ' : 'subtitlefadeup-enter '}`} style={{ transitionDelay: '200ms' }}>{project.shortDescription}</div>
        </StyledProjectInfo>
        <StyledProjectCover color={project.color} oddeven={oddeven} className="relative row-start-1 overflow-hidden cursor-pointer ">
          <Image filename={`${project.title}-cover.png`} alt={`${project.title} cover`} classes={`e ${reveal ? 'fade-enter-active' : 'fade-enter'}`} />
          <StyledProjectLogo>
            <Image filename={`project__${project.title}.png`} alt={`${project.title} logo`} classes={reveal ? 'logo-up-enter-active' : 'logo-up-enter'} />
          </StyledProjectLogo>
          {project.type === 'web' && (
            <StyledProjectImageWeb>
              <Image filename={`project-slide__${project.title}.png`} alt={`${project.title} image`} classes={`${reveal ? 'up-enter-active' : 'up-enter'} ${hover ? 'hover-active' : ''}`} />
            </StyledProjectImageWeb>
          )}
          {project.type === 'phone' && (
            <StyledProjectImagePhone className="flex justify-center w-full">
              <Image filename={`project-slide__${project.title}-2.png`} alt={`${project.title} image`} classes={`${reveal ? 'up-enter-active' : 'up-enter'} ${hover ? 'hover-active' : ''}`} />
              <Image filename={`project-slide__${project.title}-1.png`} alt={`${project.title} image`} classes={`${reveal ? 'up-enter-active' : 'up-enter'} ${hover ? 'hover-active' : ''}`} />
              <Image filename={`project-slide__${project.title}-3.png`} alt={`${project.title} image`} classes={`${reveal ? 'up-enter-active' : 'up-enter'} ${hover ? 'hover-active' : ''}`} />
            </StyledProjectImagePhone>
          )}
        </StyledProjectCover>
      </StyledProjectSlide >
    </TLink>
  )
}

export default ProjectSlide;