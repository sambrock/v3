import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';


import IconLogo from './icons/logo';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 10;
  margin: 3rem 0;

  .logo {
    width: 5em;
    
    svg {
      filter: contrast(70%);
      mix-blend-mode: exclusion;
      fill: var(--black);
    }
  }

  @media(max-width: 480px) {
    margin: 25px 0 0 0;

    .logo {
      width: 3rem;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo"><Link to="/"><IconLogo /></Link></div>
    </StyledHeader>
  )
}

export default Header;