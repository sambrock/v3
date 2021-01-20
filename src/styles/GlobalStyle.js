import { createGlobalStyle } from 'styled-components';

import TransitionStyles from './TransitionStyles';

import Gilroy from '../fonts/Gilroy-Regular.woff';
import GilroyMedium from '../fonts/Gilroy-Medium.woff';
import GilroyBold from '../fonts/Gilroy-Bold.woff';
import PoppinsMedium from '../fonts/Poppins-Medium.woff';

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
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  
  :root {
    --black: #000000;
    --black-light: rgba(0,0,0,.65);
    --red: #ED1B35;
    --white: #F1F5F5;
    --off-white: #E7EEED;
    --white-light: rgba(255,255,255,.55);
    --font-sans: 'Gilroy', sans-serif;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --fz-main: clamp(2.4rem, 4vw, 4rem);
    --easing: cubic-bezier(0.43, 0.13, 0.23, 0.96);
    --transition: all 0.25s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  }

  html {
    box-sizing: border-box;
    width: 100%;
    scrollbar-width: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background: var(--red);
    color: var(--white);
  }

  ::-webkit-scrollbar {
    display: none;
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
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    line-height: 1.3;
    
    @media(max-width: 480px) {
      font-size: var(--fz-lg);
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  #content {
    background: linear-gradient(90deg, var(--white) 50%, var(--off-white) 50%);
    width: 100%;
    margin: 0 auto;
    z-index: 3;
  }

  section {
    background: linear-gradient(90deg, var(--white) 50%, var(--off-white) 50%);
    max-width: 1400px;
    margin: 0 auto;
    padding: 5rem 0;

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

  p {
    margin: 0;
    line-height: 1.5em;

    a {
      font-weight: 400;
      padding-bottom: 1.5px;
      border-bottom: 1px var(--black) dotted;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin: 0;
    line-height: 1.1;
  }

  h3 {
    font-size: var(--fz-xs);
    font-weight: 600;
    letter-spacing: .8px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  img,
  svg,
  .gatsby-image-wrapper {
    user-select: none;
    user-drag: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
    font-weight: 600;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style-type: none;
      margin: 0 0 4px 0;
    }
  }

  .btn {
    color: var(--black-light);
    /* border: 1.5px solid var(--black); */
    font-size: var(--fz-xs);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    padding: 1rem 1rem;
    background-color: transparent;
    text-transform: uppercase;
    font-family: 'Gilroy';
    font-weight: 600;
    letter-spacing: .8px;
    transition: all ease .2s;
    display: inline-block;

    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
    &:after {
      display: none !important;
    }
  }

  .img-w-full {
    img {
      width: 100%;
    }
  }

  ${TransitionStyles};
`;

export default GlobalStyle;