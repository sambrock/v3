import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { StyledIconBase } from '@styled-icons/styled-icon'
import { Github, Linkedin, Dribbble, Behance, Twitter } from '@styled-icons/boxicons-logos'

const StyledSocialLinks = styled.div`
  position: fixed;
  top: 0;
  left: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  z-index: 100;
  background: none;

  a {
    margin: 1rem 0;

    svg {
      filter: contrast(100%);
      fill: var(--white);
    }
  }
  
  @media(max-width: 1080px) {
    left: 25px
  }

  @media(max-width: 768px){
    position: relative;
    flex-direction: row;
    justify-content: space-around;
    height: auto;
    width: 100%;
    left: 0;

    a {
    svg {
      fill: var(--black);
    }
  }
  }

  ${StyledIconBase} {
    width: 22px;
  }
`;

const StyledEmailLink = styled.div`
  position: fixed;
  top: 0;
  right: 3rem; 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  z-index: 100;

  a {
    transform: rotate(90deg);
    font-weight: 500;
    font-size: 14px;
    letter-spacing: .6px;
    color: rgba(255,255,255,.85);
    backface-visibility: hidden;
    user-select: none;
  }

  @media(max-width: 1080px) {
    right: 25px
  }

  @media(max-width: 768px){
   display: none;
  }
`;

const SocialIcons = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <CSSTransition in={isMounted} timeout={500} classNames="fade">
      <StyledSocialLinks style={!isMounted ? { opacity: 0 } : {}}>
        <a href="https://github.com/sambrock" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github /></a>
        <a href="https://www.linkedin.com/in/sam-brocklehurst/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
        <a href="https://dribbble.com/sambrock" target="_blank" rel="noopener noreferrer" aria-label="Dribbble"><Dribbble /></a>
        <a href="https://www.behance.net/sambrocklehurst" target="_blank" rel="noopener noreferrer" aria-label="Behance"><Behance /></a>
        <a href="https://twitter.com/SxmBrock" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter /></a>
      </StyledSocialLinks>
    </CSSTransition>
  )
}

export default SocialIcons;

export const Email = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <CSSTransition in={isMounted} timeout={500} classNames="fade">
      <StyledEmailLink style={!isMounted ? { opacity: 0 } : {}}>
        <a href="mailto:hi@sambrock.com" target="_blank" rel="noopener noreferrer">hi@sambrock.com</a>
      </StyledEmailLink>
    </CSSTransition>
  )
}