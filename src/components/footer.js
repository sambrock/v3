import React from 'react';
import styled from 'styled-components';
import SocialIcons, { Email } from './social-icons';

const StyledFooter = styled.footer`
  width: 100vw;
  display: grid;
  align-items: baseline;
  z-index: 3;
  bottom: 0;
  padding: 0 25px;

  .copyright {
    font-weight: 500;
    color: var(--black-light);
    font-size: 14px;
    text-align: center;
    margin: 3rem 0;

    @media(max-width: 480px) {
      margin: 50px 0 25px;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SocialIcons isMobile={true} />
      <Email isMobile={true} />
      <span className="copyright">Designed &amp; built by Sam Brocklehurst</span>
    </StyledFooter>
  )
}

export default Footer;