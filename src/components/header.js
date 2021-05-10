import React from 'react';
import styled from 'styled-components';
import SocialIcons, { Email } from './social-icons';

import TLink from './transition-link';
import IconLogo from './icons/logo';

const StyledHeader = styled.header`
  mix-blend-mode: exclusion;

  .logo {
    svg {
      filter: contrast(100%);
      z-index: 9999;
      
      path {
        fill: var(--white);
      }
    }
  }
`;

const StyledSocialLinks = styled.div`
  a {
    margin:0 1rem;
    
    svg {
      filter: contrast(100%);
      fill: var(--white);
    }
  }
`;

const StyledEmailLink = styled.div`
  a {
    color: white;
  }
`;

const Header = ({ location }) => (
  <StyledHeader className="fixed-center flex justify-center top-0 fixed w-full z-50 mt-6 sm:mt-12 bg-none h-28 items-center">
    <StyledEmailLink className="hidden lg:block ml-28 mr-auto">
      <Email className="text-opacity-2 font-normal text-lg tracking-wider" />
    </StyledEmailLink>
    <div className="logo w-14 sm:w-24 fixed"><TLink to="/" currentPath={location.pathname}><IconLogo /></TLink></div>
    <StyledSocialLinks className="hidden lg:block mr-28 ml-auto">
      <SocialIcons className="flex items-center" />
    </StyledSocialLinks>
  </StyledHeader>
)

export default Header;