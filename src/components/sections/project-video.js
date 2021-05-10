import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import FilmlistDemo from '../../videos/filmlist-demo.mp4'
import PaceDemo from '../../videos/pace-demo.mp4'
import TrypDemo from '../../videos/tryp-demo.mp4'
import ExterraDemo from '../../videos/exterra-demo.mp4'
import VendeeDemo from '../../videos/vendee-demo.mp4'

const StyledProjectVideoContainer = styled.section`
  background: ${props => rgba(props.color, .2)};
  max-width: 100vw;
  left: 0;

  .project__vid {
    ${props => props.theme.mixins.width}
  }
`;

const videos = { Filmlist: FilmlistDemo, Pace: PaceDemo, TRYP: TrypDemo, Exterra: ExterraDemo, Vendee: VendeeDemo };

const ProjectVideo = ({ title, color }) => (
  <StyledProjectVideoContainer color={color} className="py-20">
    <video className="project__vid mx-auto block" autoPlay playsInline loop={true} preload="metadata" muted="muted" ><source src={videos[title]} type="video/mp4" />Your browser does not support the video tag.</video>
  </StyledProjectVideoContainer>
)

export default ProjectVideo;