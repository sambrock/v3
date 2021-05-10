import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import SocialIcons, { Email } from './social-icons';
import { TransitionContext } from './transition-context';

const StyledFooter = styled.footer`
  mix-blend-mode: exclusion;

  @media(max-width: 768px) {
    mix-blend-mode: normal;
  }
`;

// const StyledSocialLinks = styled.div`
//   a {
//     margin:0 1rem;
//   }
// `;

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
    <StyledFooter className="w-screen grid items-baseline z-20 bottom-0 py-6 sm:py-12 px-0 sm:px-12 relative">
      <SocialIcons className="flex lg:hidden mb-3 w-full justify-around" />
      <Email className="block lg:hidden font-medium text-opacity text-sm text-center mb-6" />
      <a ref={loader} href="https://github.com/sambrock/v3" rel="noopener noreferrer" aria-label="GitHub repo" className={`font-medium text-opacity text-sm text-center ${reveal ? 'fadeup-enter-active' : 'fadeup-enter'} ${transition.play ? 'hide' : ''}`}>Designed &amp; built by Sam Brocklehurst</a>
    </StyledFooter>
  )
}

export default Footer;