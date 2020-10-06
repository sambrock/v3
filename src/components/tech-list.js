import React from 'react'
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

import { IconReact, IconNode, IconMongoDB, IconGulp, IconIllustrator, IconPhotoshop } from './icons'

const StyledTechList = styled.div`
    display: flex;
    align-items: center;

    .tech {
      margin: 0 .75rem 0 0;

      &.no-icon {
        margin: 0 .75rem 5px 0;
        font-size: .9em;
        font-family: $medium;
      }
    }

    .tech-icon-tooltip {
      background: var(--black) !important;
      color: $white !important;
      border-radius: 0px !important;
      font-weight: 500;

    .place-bottom::after {
      border-bottom-color: var(--white) !important;
    }
  }

  .tech-icon {
    height: 1.75em;
    fill: var(--black);
  }
`;

const TechList = ({ items }) => {
  return (
    <StyledTechList>
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('react') && (
        <a href="https://reactjs.org/" target="__blank" data-tip="React.js" data-place="bottom" className="tech" aria-label="React.js"><IconReact classes="tech-icon" /></a>
      )}
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('node') && (
        <a href="https://nodejs.org/" target="__blank" data-tip="Node.js" data-place="bottom" className="tech" aria-label="Node.js"><IconNode classes="tech-icon" /></a>
      )}
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('mongodb') && (
        <a href="https://www.mongodb.com/" target="__blank" data-tip="MongoDB" data-place="bottom" className="tech" aria-label="MongoDB"><IconMongoDB classes="tech-icon" /></a>
      )}
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('gulp') && (
        <a href="https://gulpjs.com/" target="__blank" data-tip="gulp.js" data-place="bottom" className="tech" aria-label="Gulp.js"><IconGulp classes="tech-icon" /></a>
      )}
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('illustrator') && (
        <a href="https://www.adobe.com/uk/products/illustrator.html" target="__blank" data-tip="Adobe Illustrator" data-place="bottom" className="tech" aria-label="Illustrator"><IconIllustrator classes="tech-icon" /></a>
      )}
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('photoshop') && (
        <a href="https://www.adobe.com/uk/products/photoshop.html" target="__blank" data-tip="Adobe Photoshop" data-place="bottom" className="tech" aria-label="Photoshop"><IconPhotoshop classes="tech-icon" /></a>
      )}
      {items.includes('express') && (
        <a href="https://expressjs.com/" target="__blank" className="tech no-icon" aria-label="Express">Express</a>
      )}
      {items.includes('tmdb api') && (
        <a href="https://developers.themoviedb.org/3/" target="__blank" className="tech no-icon" aria-label="TMDb API">TMDb API</a>
      )}
      {items.includes('protopie') && (
        <a href="https://www.protopie.io/" target="__blank" className="tech no-icon" aria-label="ProtoPie">ProtoPie</a>
      )}
    </StyledTechList>
  )
}

export default TechList;