import React from 'react';
import styled, { css } from 'styled-components';
import { IconLogo } from './icons';

const StyledHeader = styled.header`
  top: 0;
  z-index: 10;
  width: 100%;

  .logo {

    svg {
      fill: var(--black);
      height: 5rem;
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