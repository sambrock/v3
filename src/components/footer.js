import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import SocialIcons, { Email } from './social-icons';
import { TransitionContext } from './transition-context';

const StyledFooter = styled.footer`
  width: 100vw;
  display: grid;
  align-items: baseline;
  z-index: 11;
  bottom: 0;
  padding: 2rem 25px;
  position: relative;
  mix-blend-mode: exclusion;

  span {
    display: block;
  }

  .copyright {
    font-weight: 500;
    color: var(--black-light);
    font-size: 14px;
    text-align: center;
  }

  @media(max-width: 768px) {
    mix-blend-mode: normal;
    z-index: 3;
  }
  
  @media(max-width: 480px) {
    padding: 0 0 25px 0;

    .copyright {
      padding: 25px 0 0 0;
    }
  }
`;

const Footer = () => {
  const { transition } = useContext(TransitionContext);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setReveal(false);
  }, [transition]);

  const loader = useRef(null);

  useEffect(() => {
    if (!loader) return;
    const observer = new IntersectionObserver(handleObserver, { rootMargin: "0px", threshold: .6 });

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
    <StyledFooter>
      <SocialIcons />
      <Email />
      <a ref={loader} href="https://github.com/sambrock/v3" rel="noopener noreferrer" aria-label="GitHub repo" className={`copyright ${reveal ? 'fadeup-enter-active' : 'fadeup-enter'} ${transition.play ? 'hide' : ''}`}>Designed &amp; built by Sam Brocklehurst</a>
    </StyledFooter>
  )
}

export default Footer;