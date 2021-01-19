import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import FilmlistVid from '../../videos/filmlist-demo.mp4'
import PaceVid from '../../videos/pace-demo.mp4'
import TrypVid from '../../videos/tryp-demo.mp4'

const StyledProjectVideoContainer = styled.section`
  background: ${props => rgba(props.color, .2)};
  max-width: 100vw;
  left: 0;

  .project__vid {
    width: 1400px;
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
    <video className="project__vid mx-auto block" autoPlay playsInline loop={true} preload="metadata" muted="muted" ><source src={videos[title]} type="video/mp4" />Your browser does not support the video tag.</video>
  </StyledProjectVideoContainer>
)

export default ProjectVideo;