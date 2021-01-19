import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { CSSTransition } from 'react-transition-group';

import Image from '../image';
import { animated, useSpring, useTrail } from 'react-spring';

const StyledHeroContainer = styled.section`
  padding-top: 20vh;
  grid-template-rows: 1fr 1fr;
  background: ${props => `linear-gradient(90deg, ${lighten(0.02, props.color)} 50%, ${props.color} 50%)`};

  @media(max-width: 1024px) {
    grid-template-rows: 1fr 2fr;
    padding-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 5rem;
    padding-bottom: 15px;
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

const StyledProjectLogo = styled(animated.div)`
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
      width: 100%;
    }

    @media (max-width: 480px) {
      height: 100%;
    }
  }
`;

const StyledProjectPhoneImage = styled.div.attrs({ className: 'flex justify-center' })`
  .gatsby-image-wrapper {
    overflow: visible !important;
  }

  img {
    width: 100%;
  }

  .project__phone {
    max-width: 550px;
  
    &:nth-child(1) {
      margin-top: 8%;
      @media(max-width: 1290px) {
        margin: 0;
      }
    }
  
    &:nth-child(2) {
      margin-left: -8%;
      z-index: 3;
    }
  
    &:nth-child(3) {
      margin-top: 8%;
      margin-left: -8%;
      @media(max-width: 1290px) {
        margin-top: 0;
        z-index: 3;
      }
    }
  }

  @media(max-width: 1290px) {
    max-width: 900px;
  }
  
  @media(max-width: 480px) {
    display: none;
  }
`;

const StyledProjectWebImage = styled(animated.div)`
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
`;

const ProjectHero = ({ color, title, type }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [animation, setAnimation] = useState(false);

  const mainImgRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    mainImgRef.current = requestAnimationFrame(getTranslateY);
    return () => cancelAnimationFrame(mainImgRef.current);
  })

  useEffect(() => {
    setTimeout(() => { setAnimation(true); }, 1200);
  }, [])

  const getTranslateY = () => {
    if (window.pageYOffset < window.innerHeight) {
      setTranslateY(window.pageYOffset);
    }
    mainImgRef.current = requestAnimationFrame(getTranslateY);
  }

  const logoProps = useSpring({ transform: `translateY(${translateY / 5}px)` });
  const mainImageProps = useSpring({ transform: `translateY(-${translateY / 10}px)` });
  const mainImagePhoneProps = useTrail(3, { transform: `translateY(-${translateY / 10}px)` });

  return (
    <StyledHeroContainer color={color} className="h-screen pb-0 left-0 grid overflow-hidden max-w-full ">
      <CSSTransition in={isMounted} timeout={1000} classNames="logofadeup">
        <StyledProjectLogo style={animation ? logoProps : {}}><Image filename={`project__${title}.png`} alt={title} classes={`project__logo ${!isMounted ? 'hide' : ''}`} /></StyledProjectLogo>
      </CSSTransition>
      {type === 'web' && (
        <CSSTransition in={isMounted} timeout={800} classNames="mainimagefadeup">
          <StyledProjectWebImage style={animation ? mainImageProps : {}} ref={mainImgRef}><Image filename={`project-slide__${title}.png`} alt={title} classes={`project__mainimg web ${!isMounted ? 'hide' : ''}`} /></StyledProjectWebImage>
        </CSSTransition>
      )}
      {type === 'phone' && (
        <>
          <CSSTransition in={isMounted} timeout={1200} classNames="phonesimagefadeup">
            <StyledProjectPhoneImage className="project__mainimg" ref={mainImgRef}>
              <animated.div className="project__phone" style={animation ? mainImagePhoneProps[0] : {}}><Image filename={`project-slide__${title}-1.png`} alt={title} classes={!isMounted ? 'hide' : ''} /></animated.div>
              <animated.div className="project__phone" style={animation ? mainImagePhoneProps[1] : {}}><Image filename={`project-slide__${title}-2.png`} alt={title} classes={!isMounted ? 'hide' : ''} /></animated.div>
              <animated.div className="project__phone" style={animation ? mainImagePhoneProps[2] : {}}><Image filename={`project-slide__${title}-3.png`} alt={title} classes={!isMounted ? 'hide' : ''} /></animated.div>
            </StyledProjectPhoneImage>
          </CSSTransition>
          <CSSTransition in={isMounted} timeout={800} classNames="mainimagefadeup">
            <animated.div style={mainImageProps} ref={mainImgRef}><Image filename={`${title}-iphones.png`} alt={title} classes={`project__mainimg w-1024 ${!isMounted ? 'hide' : ''}`} /></animated.div>
          </CSSTransition>
        </>
      )}
    </StyledHeroContainer>
  )
}

export default ProjectHero;