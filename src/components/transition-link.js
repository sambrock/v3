import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';

import { TransitionContext } from './transition-context';

const TLink = ({ to, color, currentPath, children }) => {
  const { setTransition } = useContext(TransitionContext);
 
  if(currentPath === to) return children;

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