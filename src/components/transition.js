import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { TransitionContext } from './transition-context';

const StyledPageMask = styled.div`
  width: 50vw;
  position: fixed;
  bottom: 0;
  z-index: 9;
  ${({ pos }) => pos === 'left' && 'left: 0;'}
  ${({ pos }) => pos === 'right' && 'right: 0; transition-delay: 50ms;'}
  background: ${({ pos, color }) => pos === 'left' && color !== '#f1f5f5' ? `${rgba(color, .9)}` : color};
`;

const PageTransition = ({ location }) => {
  const { transition } = useContext(TransitionContext);

  const content = document.querySelectorAll("#content");
  useEffect(() => {
    if (!content[0]) return;
    transition.play ? content[0].classList.add('hidecontent') : content[0].classList.remove('hidecontent');
    if(location.pathname !== '/') content[0].classList.remove('hidecontent');
  }, [transition, content])

  return (
    <>
      <StyledPageMask className={transition.play ? 'pageout-enter-active' : 'pageout-enter'} pos="left" color={transition.color ? transition.color : '#f1f5f5'} />
      <StyledPageMask className={transition.play ? 'pageout-enter-active' : 'pageout-enter'} pos="right" color={transition.color ? transition.color : '#e7eeed'} />
    </>
  )
}

export default PageTransition;