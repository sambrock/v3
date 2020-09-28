import { createGlobalStyle } from 'styled-components';

// import ResistRegular from '../fonts/Resist-Regular.oft';
// import ResistMedium from '../fonts/Resist-Medium.oft';
// import ResistBold from '../fonts/Resist-Bold.oft';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
 
  :root {
    --black: #0C1114;
    --red: #F20732;
    --white: #F2F4F5;

    --font-sans: 'Montserrat', -apple-system, system-ui, sans-serif;

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
    font-family: var(--font-sans);
    font-size: var(---fz-xl);
    line-height: 1.3;

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
    padding: 3.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 00;
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
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