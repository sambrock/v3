import { createGlobalStyle } from 'styled-components';

import Gilroy from '../fonts/Gilroy-Regular.woff';
import GilroyMedium from '../fonts/Gilroy-Medium.woff';
import GilroyBold from '../fonts/Gilroy-Bold.woff';

import LogoTransparent from '../images/logo-w.svg';

const GlobalStyle = createGlobalStyle` 
  @font-face {
      font-family: 'Gilroy';
      src: url(${Gilroy}) format('woff');
      font-weight: 400;
      font-style: normal;
  }
  @font-face {
      font-family: 'Gilroy';
      src: url(${GilroyMedium}) format('woff');
      font-weight: 500;
      font-style: normal;
  }
  @font-face {
      font-family: 'Gilroy';
      src: url(${GilroyBold}) format('woff');
      font-weight: 600;
      font-style: normal;
  }
  
  :root {
    --black: #000000;
    --black-light: rgba(0,0,0,.65);
    --red: #F20732;
    --white: #f1f5f5;
    --off-white: #e7eeed;
    --white-light: rgba(255,255,255,.75);
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
    background: linear-gradient(90deg, var(--white) 50%, var(--off-white) 50%);
    color: var(--black);
    font-size: var(---fz-xl);
    line-height: 1.3;
    font-family: 'Gilroy', sans-serif;
    
    @media(max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  #content {
    width: 100%;
    margin: 0 auto;
    z-index: 3;
  }

  section {
    background: linear-gradient(90deg, var(--white) 50%, var(--off-white) 50%);
    max-width: 1400px;
    margin: 0 auto;
    padding: 10vh 0;

    @media(max-width: 1550px) {
      max-width: 1100px;
    }

    @media(max-width: 1290px) {
      max-width: 900px;
    }

    @media(max-width: 1080px) {
      max-width: 700px;
    }

    @media(max-width: 768px) {
      padding: 3rem 15px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin: 0 0 10px 0;
    line-height: 1.1;
  }

  .heading {
    margin: 0;
    font-size: clamp(50px, 8vw, 100px);
    letter-spacing: -1px;
  }

  .sub-heading {
    margin: 0;
    font-weight: 500;
    font-size: clamp(16px, 4vw, 32px);
    color: var(--black-light);
  }

  .title {
    font-weight: 600;
    margin: 0;
    font-size: clamp(32px, 4vw, 52px);
  }

  .sub-title {
    font-weight: 600;
    margin: 0;
    color: var(--black-light);
  }

  img,
  svg,
  .gatsby-image-wrapper {
    user-select: none;
    user-drag: none;
    /* width: 100%; */
    /* max-width: 100%; */
    /* vertical-align: middle; */
  }

  a {
    text-decoration: none;
    color: var(--black);
    font-weight: 600;
    cursor: pointer;
  }
`;

export default GlobalStyle;