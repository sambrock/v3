import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import VizSensor from 'react-visibility-sensor';

import SocialIcons, { Email } from './social-icons';
import { TransitionContext } from './transition-context';

const StyledFooter = styled.footer`
  width: 100vw;
  display: grid;
  align-items: baseline;
  z-index: 11;
  bottom: 0;
  padding: 3rem 25px;
  position: relative;

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
  }, [transition])

  return (
    <StyledFooter>
      <SocialIcons />
      <Email />
      <VizSensor onChange={(isVisible) => setReveal(isVisible)} active={!reveal}>
        <span className={`copyright ${reveal ? 'fadeup-enter-active' : 'fadeup-enter'} ${transition.play ? 'hide' : ''}`}>Designed &amp; built by Sam Brocklehurst</span>
      </VizSensor>
    </StyledFooter >
  )
}

export default Footer;