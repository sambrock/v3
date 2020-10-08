import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { CSSTransition } from 'react-transition-group';

import Image from '../image';
import LogoTransparent from '../../images/logo-w.svg';

const StyledHeroContainer = styled.section`
  height: 100vh;
  padding-top: 20vh;
  padding-bottom: 0;
  left: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  max-width: 100%;
  background: ${props => `linear-gradient(90deg, ${rgba(props.color, .9)} 50%, ${props.color} 50%)`};

  @media(max-width: 1024px) {
    grid-template-rows: 1fr 2fr;
    padding-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 5rem;
    padding-bottom: 15px;
  }

  .project__logo {
    height: calc(100% - 10vh);
    width: 70%;
    max-width: 1400px;
    margin: 0 auto;

    img {
      max-height: 100%;
      max-width: 100%;
      width: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    
    @media (max-width: 768px) {
      width: 80%;
    }

    @media (max-width: 480px) {
      height: 100%;
    }
  }

  .project__mainimg {
    height: 45vh;
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
    grid-row: 2;
    overflow: visible !important;

    @media(max-width: 1550px) {
      max-width: 1100px;
    }
  }
  
  .project__mainimg.web {
    @media(max-width: 1290px) {
      max-width: 900px;
      height: 100%;
    }
    @media(max-width: 1024px) {
      height: 100%;
      width: 100%;
    }

    img {
      position: absolute;
      width: 120%;
      left: -10%;

      @media(max-width: 1024px) {
        width: 95vh;
        left: 0;
        bottom: 0;
        margin: auto 0 0 0;
      }
    }
  }

  .project__mainimg.phone {
    display: flex;
    justify-content: center;

    .gatsby-image-wrapper {
      overflow: visible !important;
    }

    img {
      width: 100%;
    }

    .gatsby-image-wrapper:nth-child(1) {
      margin-top: 8%;
      @media(max-width: 1290px) {
        margin: 0;
      }
    }

    .gatsby-image-wrapper:nth-child(2) {
      margin-left: -8%;
      z-index: 3;
    }

    .gatsby-image-wrapper:nth-child(3) {
      margin-top: 8%;
      margin-left: -8%;
      @media(max-width: 1290px) {
        margin-top: 0;
        z-index: 3;
      }
    }

    @media(max-width: 1290px) {
      max-width: 900px;
    }
    
    @media(max-width: 480px) {
      display: none;
    }
  }

  .project__mainimg.w-1024{
    display: none;
    @media(max-width: 480px) {
      display: block;
      height: 100%;

      img {
        position: absolute;
        width: 65vh;
        left: 0;
        bottom: 0;
        margin: auto 0 0 0;
     }
    }
  }
`;

const ProjectHero = ({ color, title, type }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledHeroContainer color={color}>
      <CSSTransition in={isMounted} timeout={1000} classNames="logofadeup">
        <Image filename={`project__${title}.png`} alt={title} classes={`project__logo ${!isMounted ? 'hide' : ''}`} />
      </CSSTransition>
      {type === 'web' && (
        <CSSTransition in={isMounted} timeout={800} classNames="mainimagefadeup">
          <Image filename={`project-slide__${title}.png`} alt={title} classes={`project__mainimg web ${!isMounted ? 'hide' : ''}`} />
        </CSSTransition>
      )}
      {type === 'phone' && (
        <>
          <CSSTransition in={isMounted} timeout={1200} classNames="phonesimagefadeup">
            <div className="project__mainimg phone">
              <Image filename={`project-slide__${title}-1.png`} alt={title} classes={!isMounted ? 'hide' : ''} />
              <Image filename={`project-slide__${title}-2.png`} alt={title} classes={!isMounted ? 'hide' : ''} />
              <Image filename={`project-slide__${title}-3.png`} alt={title} classes={!isMounted ? 'hide' : ''} />
            </div>
          </CSSTransition>
          <CSSTransition in={isMounted} timeout={800} classNames="mainimagefadeup">
            <Image filename={`${title}-iphones.png`} alt={title} classes={`project__mainimg w-1024 ${!isMounted ? 'hide' : ''}`} />
          </CSSTransition>
        </>
      )}
    </StyledHeroContainer>
  )
}

export default ProjectHero;