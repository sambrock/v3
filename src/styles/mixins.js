import { css } from 'styled-components';

const mixins = {
  width: css`
    max-width: 1300px;

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
      width: 100vw;
      padding: 0 15px;
    }
  `,
}

export default mixins;