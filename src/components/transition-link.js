import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';
import { TransitionContext } from './transition-context';

// const transitionStyles = css`
//   color: #d8cf25;
//   text-decoration: none;
//   border-bottom: 2px solid currentColor;
//   font-weight: bold;
//   outline: none;
//   -webkit-tap-highlight-color: transparent;
// `;

const TLink = ({ to, color, children }) => {
  const { setTransition } = useContext(TransitionContext);
 
  return (
    <Link
      to={to} 
      onClick={e => {
        e.preventDefault();
        setTransition({play: true, color, to});
        setTimeout(() => {
          navigate(to);
        }, 600);
      }}
    >
      {children}
    </Link>
  );
};

export default TLink;