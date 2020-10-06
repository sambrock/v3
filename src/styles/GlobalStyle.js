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
    --white: #FFFFFF;
    --off-white: #F2F4F5;
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
    background-color: var(--white);
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
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    z-index: 3;
    padding: 0 25px;
    position: relative;
  }

  #right-half-color, #left-half-color {
    position: fixed;
    top: 0;   
    height: 100vh;
    width: 50vw;
  }

  #right-half-color {
    right: 0;
    z-index: -1;
    background: var(--off-white);
    /* background:var(--off-white) url(${LogoTransparent}) no-repeat center;
    background-size: 100% calc(100vh - 6rem); */
  }

  #left-half-color {
    left: 0;
    z-index: 0;
    background: var(--white);
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
    /* width: 100%; */
    /* max-width: 100%; */
    /* vertical-align: middle; */
  }
`;

export default GlobalStyle;