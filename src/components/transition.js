import React, { useContext } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import { TransitionContext } from './transition-context';

const StyledPageMask = styled.div`
  width: 50%;
  position: fixed;
  bottom: 0;
  z-index: 9;
  ${({ pos }) => pos === 'left' && 'left: 0;'}
  ${({ pos }) => pos === 'right' && 'right: 0; transition-delay: 50ms;'}
  background: ${({ pos, color }) => pos === 'left' && color !== '#f1f5f5' ? `${lighten(0.02, color)}` : color};
  
  &::after {
    background-color: var(--white);
  }
`;

const PageTransition = () => {
  const { transition } = useContext(TransitionContext);

  return (
    <>
      <StyledPageMask className={transition.play ? 'pageout-enter-active' : 'pageout-enter'} pos="left" color={transition.color ? transition.color : '#f1f5f5'} />
      <StyledPageMask className={transition.play ? 'pageout-enter-active' : 'pageout-enter'} pos="right" color={transition.color ? transition.color : '#e7eeed'} />
    </>
  )
}

export default PageTransition;