import React from 'react'
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon'
import { ReactLogo, Nodejs } from '@styled-icons/boxicons-logos';
import { Mongodb, Adobeillustrator, Adobephotoshop, Gulp } from '@styled-icons/simple-icons';
import ReactTooltip from 'react-tooltip';

const StyledTechList = styled.div`
  display: flex;
  align-items: center;

  .tech {
    margin: 0 .75rem 0 0;

    &.no-icon {
      margin: 0 .75rem 0 0;
      font-size: .9em;
    }
  }

  .tech-icon-tooltip {
    background: var(--black) !important;
    border-radius: 0px !important;
    font-weight: 600;

    .place-bottom::after {
      border-bottom-color: var(--white) !important;
    }
  }

  ${StyledIconBase} {
    color: var(--black);
    width: 2em;
  }
`;

const TechList = ({ items }) => {
  return (
    <StyledTechList>
      {items.includes('react') && (
        <a href="https://reactjs.org/" target="__blank" data-tip="React.js" data-place="bottom" className="tech" aria-label="React.js"><ReactLogo /></a>
      )}
      {items.includes('node') && (
        <a href="https://nodejs.org/" target="__blank" data-tip="Node.js" data-place="bottom" className="tech" aria-label="Node.js"><Nodejs /></a>
      )}
      {items.includes('mongodb') && (
        <a href="https://www.mongodb.com/" target="__blank" data-tip="MongoDB" data-place="bottom" className="tech" aria-label="MongoDB"><Mongodb /></a>
      )}
      {items.includes('gulp') && (
        <a href="https://gulpjs.com/" target="__blank" data-tip="gulp.js" data-place="bottom" className="tech" aria-label="Gulp.js"><Gulp /></a>
      )}
      {items.includes('illustrator') && (
        <a href="https://www.adobe.com/uk/products/illustrator.html" target="__blank" data-tip="Adobe Illustrator" data-place="bottom" className="tech" aria-label="Illustrator"><Adobeillustrator /></a>
      )}
      {items.includes('photoshop') && (
        <a href="https://www.adobe.com/uk/products/photoshop.html" target="__blank" data-tip="Adobe Photoshop" data-place="bottom" className="tech" aria-label="Photoshop"><Adobephotoshop /></a>
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
      <ReactTooltip className="tech-icon-tooltip" />
    </StyledTechList>
  )
}

export default TechList;