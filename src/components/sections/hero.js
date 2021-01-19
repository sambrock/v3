import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const heading = <h1 className="text-main mb-1">Sam Brocklehurst</h1>;
  const subHeading = <h2 className="text-opacity font-medium text-base sm:text-heading">I design and develop web apps.</h2>;

  const items = [heading, subHeading];

  return (
    <section className="flex flex-col h-screen jusify-baseline py-12">
      <TransitionGroup component={null}>
        <div className="mt-auto mb-2">
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition in={isMounted} key={i} timeout={800} classNames="fadeup">
                <div style={{ transitionDelay: `${i + 2}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </div>
      </TransitionGroup>
    </section>
  )
}

export default Hero;