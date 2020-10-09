import React, { createContext, useEffect, useState } from 'react';

export const TransitionContext = createContext(undefined);

const TransitionContextProvider = ({ children, location }) => {
  const [transition, setTransition] = useState({play: false, color: '#FFF'});
  const [currentLocation, setCurrentLocation] = useState();

  let nextLocation = location.pathname;

  useEffect(() => {
    if(currentLocation === nextLocation) return;

    setCurrentLocation(nextLocation);
    setTransition({play: false, color: '#FFF'});
  }, [location])
  
  console.log(transition, currentLocation);

  return (
    <TransitionContext.Provider value={{ transition, setTransition }} >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContextProvider;