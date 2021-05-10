import React from 'react'
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon'
import { ReactLogo, Nodejs } from '@styled-icons/boxicons-logos';
import { Mongodb, Adobeillustrator, Adobephotoshop, Gulp, Redux, Express, Tensorflow } from '@styled-icons/simple-icons';
import ReactTooltip from 'react-tooltip';

const StyledTechList = styled.div`
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
    <StyledTechList className="flex items-center">
      {items.includes('react') && (
        <a className="text-opacity" href="https://reactjs.org/" rel="noopener noreferrer" target="__blank" data-tip="React" data-place="bottom" className="mr-4" aria-label="React"><ReactLogo /></a>
      )}
      {items.includes('node') && (
        <a className="text-opacity" href="https://nodejs.org/" rel="noopener noreferrer" target="__blank" data-tip="Node.js" data-place="bottom" className="mr-4" aria-label="Node.js"><Nodejs /></a>
      )}
      {items.includes('mongodb') && (
        <a href="https://www.mongodb.com/" rel="noopener noreferrer" target="__blank" data-tip="MongoDB" data-place="bottom" className="mr-4" aria-label="MongoDB"><Mongodb /></a>
      )}
      {items.includes('redux') && (
        <a href="https://redux.js.org/" rel="noopener noreferrer" target="__blank" data-tip="Redux" data-place="bottom" className="mr-4" aria-label="Redux"><Redux /></a>
      )}
      {items.includes('gulp') && (
        <a href="https://gulpjs.com/" rel="noopener noreferrer" target="__blank" data-tip="gulp.js" data-place="bottom" className="mr-4" aria-label="Gulp.js"><Gulp /></a>
      )}
      {items.includes('illustrator') && (
        <a href="https://www.adobe.com/uk/products/illustrator.html" rel="noopener noreferrer" target="__blank" data-tip="Adobe Illustrator" data-place="bottom" className="mr-4" aria-label="Illustrator"><Adobeillustrator /></a>
      )}
      {items.includes('photoshop') && (
        <a href="https://www.adobe.com/uk/products/photoshop.html" rel="noopener noreferrer" target="__blank" data-tip="Adobe Photoshop" data-place="bottom" className="mr-4" aria-label="Photoshop"><Adobephotoshop /></a>
      )}
      {items.includes('express') && (
        <a href="https://expressjs.com/" rel="noopener noreferrer" target="__blank" data-tip="Express" data-place="bottom" className="mr-4" aria-label="Express"><Express /></a>
      )}
      {items.includes('tensorflow') && (
        <a href="https://www.tensorflow.org/" rel="noopener noreferrer" target="__blank" data-tip="TensorFlow" data-place="bottom" className="mr-4" aria-label="Tensorflow"><Tensorflow /></a>
      )}
      {items.includes('tmdb api') && (
        <a href="https://developers.themoviedb.org/3/" rel="noopener noreferrer" target="__blank" className="mr-4 text-sm whitespace-nowrap font-semibold" aria-label="The Movie Database API">TMDb API</a>
      )}
      {items.includes('ll2 api') && (
        <a href="https://thespacedevs.com/llapi/" rel="noopener noreferrer" target="__blank" className="mr-4 text-sm whitespace-nowrap font-semibold" aria-label="Launch Library 2 API">LL2 API</a>
      )}
      {items.includes('protopie') && (
        <a href="https://www.protopie.io/" rel="noopener noreferrer" target="__blank" className="mr-4 text-sm whitespace-nowrap font-semibold" aria-label="ProtoPie">ProtoPie</a>
      )}
      <ReactTooltip className="tech-icon-tooltip" />
    </StyledTechList>
  )
}

export default TechList;