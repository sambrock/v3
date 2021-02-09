import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { lighten } from 'polished';
import anime from 'animejs';

import IconLogo from './icons/logo';

const StyledLoaderContainer = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    position: absolute;
    width: 5em;
    opacity: 0;

    &.white {
      path {
        fill: var(--white);
      }
    }

    &.black {
      path {
        fill: var(--black);
      }
    }

    @media(max-width: 480px) {
      width: 3rem;
    }
  }
`;

const StyledPageMask = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100vh;

  ${({ pos }) => pos === 'left' && 'left: 0;'}
  ${({ pos }) => pos === 'right' && 'right: 0;'}
  background: ${({ pos, color }) => pos === 'left' && color !== '#f1f5f5' ? `${lighten(0.02, color)}` : color};
  
  &::after {
    background-color: var(--white);
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    animate();
    return () => clearTimeout(timeout);
  }, []);


  const animate = () => {
    const loader = anime.timeline({
      loop: false,
      complete: () => finishLoading()
    });

    const easing = 'cubicBezier(0.43, 0.13, 0.23, 0.96)'

    loader
      .add({
        targets: '.logo svg',
        scale: 1.3,
        delay: 10,
        duration: 0
      })
      .add({
        targets: '.white',
        opacity: 1,
        delay: 300,
        duration: 300,
        easing: easing
      })
      .add({
        delay: 100
      })
      .add({
        targets: '.page-mask',
        height: '0vh',
        delay: anime.stagger(100),
        duration: 600,
        easing: easing
      })
      .add({
        targets: '.logo',
        top: window.innerWidth < 480 ? '25px' : '3rem',
        delay: 0,
        duration: 600,
        easing: easing
      }, '-=250')
      .add({
        targets: '.logo svg',
        scale: 1,
        delay: 0,
        duration: 800,
        easing: easing
      }, '-=800')
      .add({
        targets: '.black',
        opacity: 1,
        delay: 0,
        duration: 10,
        easing: easing
      }, '-=720');
  }

  return (
    <StyledLoaderContainer>
      <Helmet bodyAttributes={{ class: 'overflow-hidden' }} />
      <StyledPageMask className={'page-mask'} pos="left" color={'#ED1B35'} />
      <StyledPageMask className={'page-mask'} pos="right" color={'#ED1B35'} />
      <div className="logo white"><IconLogo /></div>
      <div className="logo black"><IconLogo /></div>
    </StyledLoaderContainer>
  )
}

export default Loader;