import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import Image from '../image';

import LogoTransparent from '../../images/logo-w.svg';

const StyledHeroContainer = styled.section`
    height: 100vh;
    left: 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
    max-width: 100%;
    background: ${props => `linear-gradient(90deg, ${rgba(props.color, .9)} 50%, ${props.color} 50%)`};

    @media (max-width: 375px) {
      height: 80vh;
      grid-template-rows: 60vh 1fr;
    }

    .project__logo {
      overflow: visible !important; 
      grid-row: 1;
      position: relative;
      width: 100%;
      display: none;

      img {
        position: fixed;
        max-height: 18vh;
        margin-top: 15%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        @media (max-width: 768px) {
          position: relative;
          margin-top: 50%;
          max-width: none;
          width: calc(100vw - 50px);
        }
      }
    }

    .project__mainimg {
      height: 45vh;
      margin: 0 auto;
      width: 100%;
      max-width: 1400px;
      grid-row: 2;
      overflow: visible !important;
      
      img {
        position: absolute;
        width: 120%;
        left: -10%;
      }

      @media (max-width: 768px) {
        height: auto;
        width: auto;
        
        img {
          width: 100%;
        }
      }

      &.phone {
        display: flex;
        justify-content: center;
        position: relative;
        height: 55vh;
        width: 50vw;

        .gatsby-image-wrapper {
          overflow: visible !important;
        }

        img {
          width: 100%;
        }

        @media (max-width: 768px) {
          height: 35vh;
          width: auto;
          margin: 0 25px;

          img {
            // height: 100%;
            width: 100%;
          }
        }

        .gatsby-image-wrapper:nth-child(1) {
          margin-top: 8%;
        }

        .gatsby-image-wrapper:nth-child(2) {
          margin-left: -8%;
          z-index: 3;
        }

        .gatsby-image-wrapper:nth-child(3) {
          margin-top: 8%;
          margin-left: -8%;
        }
      }
    }
`;

const ProjectHero = ({ color, title, type }) => {
  return (
    <StyledHeroContainer color={color}>
      <Image filename={`project__${title}.png`} alt={title} classes="project__logo" />
      {type === 'web' && (
        <Image filename={`project-slide__${title}.png`} alt={title} classes="project__mainimg" />
      )}
      {type === 'phone' && (
        <div className="project__mainimg phone">
          <Image filename={`project-slide__${title}-1.png`} alt={title} />
          <Image filename={`project-slide__${title}-2.png`} alt={title} />
          <Image filename={`project-slide__${title}-3.png`} alt={title} />
        </div>
      )}
    </StyledHeroContainer>
  )
}

export default ProjectHero;