import { createGlobalStyle } from 'styled-components';

import mixins from './mixins';
import TransitionStyles from './TransitionStyles';

const GlobalStyle = createGlobalStyle`   
  :root {
    --black: #1a1313;
    --black-light: rgba(0,0,0,.65);
    --red: #ED1B35;
    --white: #F1F5F5;
    --off-white: #E7EEED;
    --white-light: rgba(255,255,255,.55);
    --font-sans: 'Poppins', sans-serif;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --fz-main: clamp(1.3rem, 6vw, 4rem);
    --fz-name: clamp(2rem, 10vw, 7.2rem);
    --easing: cubic-bezier(0.43, 0.13, 0.23, 0.96);
    --transition: all 0.25s cubic-bezier(0.43, 0.13, 0.23, 0.96);
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

  ::selection {
    background: var(--red);
    color: var(--white);
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--black-light);
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    /* background: var(--white); */
    background: linear-gradient(90deg, var(--white) 50%, var(--off-white) 50%);
    color: var(--black);
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    line-height: 1.3;
    overflow: overlay;
    
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
    margin: 0 auto;
    ${mixins.width}
  }

  p {
    margin: 0;
    line-height: 1.5em;
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
    letter-spacing: .2px;
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
    color: inherit;
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

  .fancy-text {
    font-family: 'Noticia Text';
  }

  .border-red {
    border: 1px red solid;
  }

  .fixed-center {
    left: 50%;
    transform: translate(-50%, 0);
  }

  .link {
    font-weight: 600;
    color: var(--black);
  }

  .border-default {
    border: 1px var(--black-light) solid;
  }

  ${TransitionStyles};
`;

export default GlobalStyle;