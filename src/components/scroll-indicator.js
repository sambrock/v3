import React, { useEffect, useRef } from 'react';
import { useDrag, useScroll } from 'react-use-gesture';
import styled from 'styled-components';

const StyledScrollIndicator = styled.div`
  position: absolute;
  width: 100px;
  transform: translate(-50%, 0px);
  left: 50%;
  bottom: 0px;
  overflow: hidden;

  .scroll-content {
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
    }
  }
`;


export default function ScrollIndicator() {
  const wheel = useSroll(state => {
    console.log("wheeling", state);
  });
  
  
  return (
    <StyledScrollIndicator {...wheel()}>
      <div className="scroll-content">
        <p>Scroll</p>
        <div className="indicator"></div>
      </div>
    </StyledScrollIndicator>
  )
}
