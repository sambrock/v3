import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: baseline;
  padding-bottom: 0;
  padding-top: 0;
  
  .name {
      margin: auto 0 .5rem 0;
  }

  h1 {
    margin: 0 0 .5rem 0;
  }

  h2 {
    margin: 0 0 6rem 0;
  }

  @media(max-width: 480px) {
    height: 100vh;
    justify-content: center;

    .name {
      margin: 0;
    }

    h1 {
    margin: 0 0 .5rem 0;
    }

    h2 {
      margin: 0 0 25px 0;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const heading = <h1 className="heading">Sam Brocklehurst</h1>;
  const subHeading = <h2 className="sub-heading">I design and develop web apps.</h2>;

  const items = [heading, subHeading];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        <div className="name">
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition in={isMounted} key={i} timeout={800} classNames="fadeup">
                <div style={{ transitionDelay: `${i + 2}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </div>
      </TransitionGroup>
    </StyledHeroSection>
  )
}

export default Hero;