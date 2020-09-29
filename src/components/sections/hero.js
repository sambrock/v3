import React from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  h1 {
    margin: 0 0 .5rem 0;
  }

  h2 {
    margin: 0 0 2rem 0;
  }

  .email-link {
    ${({ theme }) => theme.button};
    align-self: flex-start;  
  }
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <h1 className="heading">Sam Brocklehurst.</h1>
      <h2 className="sub-heading">I design and develop web apps.</h2>
      <button class="email-link" style={{color: '#F27405', border: '1px solid #F27405'}}>Get in touch</button>
    </StyledHeroSection>
  )
}

export default Hero;