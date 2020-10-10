import { css } from 'styled-components';

const TransitionStyles = css`
  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }

  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 600ms var(--easing), transform 600ms var(--easing);
  }
  
  /* Transform up */
  .up-enter {
    transform: translateY(50%);
  }
  .up-enter-active {
    transform: translateY(0%);
    transition: transform 500ms var(--easing);
  }

  /* Title fade up */
  .titlefadeup-enter {
    opacity: 0.01;
    transform: translateY(6px);
  }
  .titlefadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 400ms var(--easing), transform 400ms var(--easing);
  }
  .subtitlefadeup-enter {
    opacity: 0.01;
    transform: translateY(6px);
  }
  .subtitlefadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 400ms var(--easing), transform 400ms var(--easing);
  }

  /* PROJECT TRANSITIONS */
  /* logo */

  .logofadeup-enter {
    opacity: 0.01;
    transform: translateY(100vh);
  }

  .logofadeup-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: opacity 800ms var(--easing), transform 800ms var(--easing);
    transition-delay: 200ms;
  }

  /* main image */

  .mainimagefadeup-enter {
    opacity: 0.01;
    transform: translateY(50vh);
  }
  
  .mainimagefadeup-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: opacity 800ms var(--easing), transform 800ms var(--easing);
  }


  /* phone images */
  .phonesimagefadeup-enter {
    .project__phone {
      opacity: 0.01;
      transform: translateY(50vh);
    }
  }
  
  .phonesimagefadeup-enter-active {
    .project__phone {
      opacity: 1;
      transform: translateY(0%);
      transition: opacity 800ms var(--easing), transform 800ms var(--easing);

      &:nth-child(2) {
        transition-delay: 200ms;
      }
      &:nth-child(3) {
        transition-delay: 400ms;
      }
    } 
  }

  /* PAGE TRANSITIONS */

  .pageout-enter {
    height: 0vh;
  }

  .pageout-enter-active {
    transition: height 600ms var(--easing);
    height: 100vh;
  }


  /* PROJECT COVER HOVER */
  
  .hover-active {
    transform: translateY(-6%) scale(1.01);
    transition: transform 300ms var(--easing);

    &:nth-of-type(2) {
      transition-delay: 40ms;
    }

    &:nth-of-type(3) {
      transition-delay: 80ms;
    }
  }


  /* hide */
  .hide {
    opacity: 0;
  }
`;

export default TransitionStyles;