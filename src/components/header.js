import React from 'react';
import styled, { css } from 'styled-components';
import IconLogo from './icons/logo';

const StyledHeader = styled.header`
  top: 0;
  z-index: 10;
  position: fixed;
  margin: 5rem;

  .logo {
    width: 4em;
    
    svg {
      fill: var(--black);
    }
  }

  @media(max-width: 768px) {
    margin: 2rem;

    .logo {
      width: 3rem;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo"><IconLogo /></div>
    </StyledHeader>
  )
}

export default Header;