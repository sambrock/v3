import { createGlobalStyle } from 'styled-components';

import CodecBold from '../fonts/Codec-Bold.woff';
import CodecExtraBold from '../fonts/Codec-ExtraBold.woff';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
 
  @font-face {
      font-family: 'Codec Bold';
      src: local('Codec'), local('FontName'),
      url(${CodecBold}) format('woff');
      font-weight: 600;
      font-style: normal;
    }

  @font-face {
      font-family: 'Codec Extra Bold';
      src: local('Codec'), local('FontName'),
      url(${CodecExtraBold}) format('woff');
      font-weight: 700;
      font-style: normal;
  }

  :root {
    --black: #0C1114;
    --red: #F20732;
    --white: #F2F4F5;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--black);
    font-size: var(---fz-xl);
    line-height: 1.3;
    font-family: 'Montserrat', -apple-system, system-ui, sans-serif;

    @media(max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }
  }

  #root {
    min-height: 100vh;
    /* display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%; */
  }

  h1 {
    font-family: 'Codec Extra Bold';
    letter-spacing: -2px;
  }
 

  h2,
  h3,
  h4,
  h5,
  h6 { 
    font-family: 'Codec Bold';
    letter-spacing: -.6px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    
    margin: 0 0 10px 0;
    font-weight: 600;
    line-height: 1.1;
  }

  .heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .sub-heading {
    margin: 0;
    font-size: clamp(24px, 4vw, 32px);
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
`;

export default GlobalStyle;