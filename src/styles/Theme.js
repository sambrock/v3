import { css } from 'styled-components';

const theme = {
  button: css`
  /* color:  ${props => props.color}; */
  color: var(--black);
  border: 1.5px solid var(--black);
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

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
  &:after {
    display: none !important;
  }
`
}

export default theme;