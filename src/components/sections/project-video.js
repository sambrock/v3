import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import FilmlistVid from '../../videos/filmlist-demo.mp4'
import PaceVid from '../../videos/pace-demo.mp4'
import TrypVid from '../../videos/tryp-demo.mp4'

const StyledProjectVideoContainer = styled.section`
  left: 0;
  max-width: 100vw;
  background: ${props => rgba(props.color, .2)};

  .project__vid {
    display: block;
    max-width: 1400px;
    margin: 0 auto;

    @media(max-width: 1550px) {
      max-width: 1100px;
    }

    @media(max-width: 1200px) {
      max-width: 900px;
    }

    @media(max-width: 1080px) {
      max-width: 700px;
    }
  }

  @media (max-width: 768px) {
    .project__vid {
      width: 100%;
    }
  }
`;

const videos = { Filmlist: FilmlistVid, Pace: PaceVid, TRYP: TrypVid };

const ProjectVideo = ({ title, color }) => (
  <StyledProjectVideoContainer color={color}>
    <video className="project__vid" autoPlay playsInline loop={true} preload="metadata" muted="muted" ><source src={videos[title]} type="video/mp4" />Your browser does not support the video tag.</video>
  </StyledProjectVideoContainer>
)

export default ProjectVideo;