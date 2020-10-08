import React from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import styled from 'styled-components';

const StyledLoader = styled.div`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: var(--red);
  transform: translateY(100vh);
  transition: opacity 300ms ease-in-out;
  /* z-index: 9999; */
`;


const transitionStyles = {
  entering: {
    transform: 'translateY(100vh)',
  },
  entered: {
    transform: 'translateY(0)',
  },
  exiting: {
    transform: 'translateY(-100vh)',
  },
}

const PageTransition = ({ children, location }) => {
  return (
    <TransitionGroup>
      <Transition key={location.pathname} timeout={{ enter: 300, exit: 300 }} >
        {state => {
          return (
            <StyledLoader className="page-mask" style={{ ...transitionStyles[state] }}>
              {children}
            </StyledLoader>
          )
        }}
      </Transition>
    </TransitionGroup>
  )
}


export default PageTransition;