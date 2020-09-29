import { css } from 'styled-components';

const theme = {
  button: css`
  color:  ${props => props.color};
  font-size: var(--fz-xs);
  line-height: 1.3;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem 1.25rem;
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  font-weight: 600;
  /* font-family: 'Codec Bold'; */

  &:hover,
  &:focus,
  &:active {
    background-color: var(--green-tint);
    outline: none;
  }
  &:after {
    display: none !important;
  }
`
}

export default theme;