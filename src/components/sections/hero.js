import React from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: baseline;
  
  h1 {
    margin: auto 0 .5rem 0;
  }

  h2 {
    margin: 0 0 6rem 0;
  }

  @media(max-width: 480px) {
    height: 50vh;
    justify-content: center;
    margin: 100px 0;

    h1 {
      margin: 0 0 .5rem 0;
    }

    h2 {
      margin: 0 0 25px 0;
    }
  }

`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <h1 className="heading">Sam Brocklehurst</h1>
      <h2 className="sub-heading">I design and develop web apps.</h2>
    </StyledHeroSection>
  )
}

export default Hero;