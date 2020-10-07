import React from 'react';
import styled from 'styled-components';
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
  z-index: 10;

  a {
    margin: 1rem 0 ;
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
  }

  ${StyledIconBase} {
    color: var(--black);
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
  z-index: 10;

  a {
    font-weight: 600;
    color: var(--black-light);
    font-size: 14px;
    writing-mode: vertical-rl;
    backface-visibility: hidden;
  }

  @media(max-width: 1080px) {
    right: 25px
  }

  @media(max-width: 768px){
    position: relative;
    flex-direction: row;
    justify-content: space-around;
    height: auto;
    width: 100%;
    left: 0;

    a {
      writing-mode: horizontal-tb;
    }
  }
`;

const SocialIcons = () => {
  return (
    <StyledSocialLinks>
      <a href="https://github.com/SamBrock" target="_blank" rel="noopener noreferrer"><Github /></a>
      <a href="https://www.linkedin.com/in/sam-brocklehurst/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
      <a href="https://dribbble.com/sambrock" target="_blank" rel="noopener noreferrer"><Dribbble /></a>
      <a href="https://www.behance.net/sambrocklehurst" target="_blank" rel="noopener noreferrer"><Behance /></a>
      <a href="https://twitter.com/SxmBrock" target="_blank" rel="noopener noreferrer"><Twitter /></a>
    </StyledSocialLinks>
  )
}

export default SocialIcons;

export const Email = () => {
  return (
    <StyledEmailLink>
      <a href="mailto:sambrocklehurst1998@gmail.com" target="_blank" rel="noopener noreferrer">sambrocklehurst1998@gmail.com</a>
    </StyledEmailLink>
  )
}