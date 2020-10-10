import React, { createContext, useEffect, useState } from 'react';

export const TransitionContext = createContext(undefined);

const TransitionContextProvider = ({ children, location }) => {
  const [transition, setTransition] = useState({play: false, color: '#FFF'});
  const [currentPath, setCurrentPath] = useState();

  let nextLocation = location.pathname;

  useEffect(() => {
    if(currentPath === nextLocation) return;

    setCurrentPath(nextLocation);
    setTransition({play: false, color: '#FFF'});
  }, [location, nextLocation, currentPath])
  
  return (
    <TransitionContext.Provider value={{ transition, setTransition }} >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContextProvider;