import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const Styled404Secion = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: none;

  h1 {
    font-size: clamp(100px, 25vw, 200px);
  }

  @media(max-width: 480px) {
    h1 {
      margin: 0 0 .5rem 0;
    }
  }
`;

const NotFound = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true));
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <CSSTransition in={isMounted} timeout={1000} classNames="fadeup">
      <Styled404Secion>
        <h1 className="heading">404</h1>
        <h2 className="sub-heading">Page not found.</h2>
      </Styled404Secion>
    </CSSTransition>
  )
}

export default NotFound;