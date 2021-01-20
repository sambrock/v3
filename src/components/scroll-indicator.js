import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const StyledScrollIndicator = styled.div`
  position: absolute;
  width: 100px;
  transform: translate(-50%, 0px);
  left: 50%;
  bottom: 0px;
  overflow: hidden;
  transition: all .4s var(--easing);
  opacity: 1;

  &.scrolled {
    opacity: 0;
    transform: translate(-50%, -50px);
  }

  .scroll-content {
    margin: auto auto 0;
    will-change: transform;
    text-transform: uppercase;
    font-size: var(--fz-xxs);
    text-align: center;
    font-weight: 600;
    letter-spacing: .8px;
    color: var(--black-light);
    
    .indicator {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      background: var(--black-light);
      height: 35px;
      margin-top: 15px;
      transition: all .4s var(--easing);
      transform: scaleY(1);

      &.scrolled {
        transform: scaleY(0);
      }
    }
  }
`;


export default function ScrollIndicator() {
  const [isMounted, setIsMounted] = useState(false);
  const [reveal, setReveal] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const onScroll = e => {
      window.scrollY === 0 ? setReveal(true) : setReveal(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <CSSTransition in={isMounted} timeout={500} classNames="fade">
      <StyledScrollIndicator className={`${reveal ? '' : 'scrolled'}`} style={!isMounted ? { opacity: 0 } : {}}>
        <div className="scroll-content">
          <p>Scroll</p>
          <div className={`indicator ${reveal ? '' : 'scrolled'}`}></div>
        </div>
      </StyledScrollIndicator>
    </CSSTransition>
  )
}
