import React from 'react';
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon'
import { Github, Linkedin, Dribbble, Behance, Twitter } from '@styled-icons/boxicons-logos'

const StyledFooter = styled.footer`
  display: flex;
  margin: 0 5rem 5rem 5rem;
  position: absolute;
  bottom: 0;
`;

const StyledSocialLinks = styled.div`
  display: flex;
    
  a {
    /* display: inline-block; */
    margin: 0 2.5rem 0 0;
  }
  
  ${StyledIconBase} {
    color: var(--black);
    width: 28px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <a href="https://github.com/SamBrock" target="_blank" rel="noopener noreferrer"><Github /></a>
        <a href="https://www.linkedin.com/in/sam-brocklehurst/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        <a href="https://dribbble.com/sambrock" target="_blank" rel="noopener noreferrer"><Dribbble /></a>
        <a href="https://www.behance.net/sambrocklehurst" target="_blank" rel="noopener noreferrer"><Behance /></a>
        <a href="https://twitter.com/SxmBrock" target="_blank" rel="noopener noreferrer"><Twitter /></a>
      </StyledSocialLinks>
    </StyledFooter>
  )
}

export default Footer;