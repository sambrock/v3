import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Github, Linkedin, Dribbble, Behance, Twitter } from '@styled-icons/boxicons-logos'

const SocialIcons = ({ className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <CSSTransition in={isMounted} timeout={500} classNames="fade">
      <div className={className} style={!isMounted ? { opacity: 0 } : {}}>
        <a href="https://github.com/sambrock" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github className="h-6" /></a>
        <a href="https://www.linkedin.com/in/sam-brocklehurst/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-6" /></a>
        <a href="https://dribbble.com/sambrock" target="_blank" rel="noopener noreferrer" aria-label="Dribbble"><Dribbble className="h-6" /></a>
        <a href="https://www.behance.net/sambrocklehurst" target="_blank" rel="noopener noreferrer" aria-label="Behance"><Behance className="h-7" /></a>
        <a href="https://twitter.com/SxmBrock" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="h-6" /></a>
      </div>
    </CSSTransition>
  )
}

export default SocialIcons;

export const Email = ({ className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <CSSTransition in={isMounted} timeout={500} classNames="fade">
      <div style={!isMounted ? { opacity: 0 } : {}} className={className}><a href="mailto:hi@sambrock.com" target="_blank" rel="noopener noreferrer">hi@sambrock.com</a></div>
    </CSSTransition>
  )
}