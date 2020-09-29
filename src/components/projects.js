import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ScrollWheelHandler from 'react-scroll-wheel-handler';
import IconLogo from './icons/logo';
import ProjectSlide from './project-slide';

const StyledProjectsContainer = styled.section`
  position: relative;
  margin: 3rem 0;
  overflow: hidden;
`;

const StyledBackgroundLogo = styled.div`
  height: calc(100vh - 6rem);
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 0;

  svg {
    height: 100%;
    fill: rgba(255,255,255, .07);
  }

`;

const Projects = ({ projects }) => {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(null);
  const [isAnimating, setIsAnimating] = useState(null);
  const [disableAnimation, setDisableSlideAniamtion] = useState(false);

  const handleNavigation = (scroll) => {
    // if (isMobile || disableAnimation) return;
    setIsAnimating(true);

    let next = active;

    if (scroll === 'up') next--;
    if (scroll === 'down') next++;

    if (next === projects.length) next = 0;
    if (next === -1) next = (projects.length - 1);

    setAnimate({ index: active, type: 'out', direction: scroll });

    setTimeout(() => {
      setAnimate({ index: next, type: 'in', direction: scroll });
    }, 650)

    // Delay to prevent glitchy animation (due to GSAP fromTo)
    setTimeout(() => {
      setActive(next);
    }, 690)

    setTimeout(() => {
      setIsAnimating(false);
    }, 1200)
  };

  return (
    <StyledProjectsContainer>
      <ScrollWheelHandler upHandler={() => handleNavigation('up')} downHandler={() => handleNavigation('down')}>
        {projects.map((projectNode, index) => {
          const project = projectNode.node;
          return (
            <ProjectSlide key={project.id}
              project={project}
              isActive={index === active}
              animate={animate}
              current={active + 1}
              indicator={index === 0}
              isAnimating={isAnimating}
              disableSlideAnimation={setDisableSlideAniamtion}
            />
          )
        })}
        <StyledBackgroundLogo>
          <IconLogo />
        </StyledBackgroundLogo>
      </ScrollWheelHandler>
    </StyledProjectsContainer>
  )
}

export default Projects;