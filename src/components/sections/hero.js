import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { animated, useSpring } from 'react-spring';

const isBrowser = typeof window !== "undefined"

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setTimeout(() => { setAnimation(true); }, 1200);
  }, [])

  const heroRef = useRef();

  const getTranslateY = () => {
    if (window.pageYOffset < window.innerHeight) {
      setTranslateY(window.pageYOffset);
    }
    heroRef.current = requestAnimationFrame(getTranslateY);
  }

  const getWindowHeight = () => isBrowser ? window.innerHeight : 0;

  useEffect(() => {
    heroRef.current = requestAnimationFrame(getTranslateY);
    return () => cancelAnimationFrame(heroRef.current);
  })

  const h1Props = useSpring({ transform: `translateY(${translateY / 3}px)`, opacity: 1 - (translateY / getWindowHeight()) });
  const h2Props = useSpring({ transform: `translateY(${translateY / 2.7}px)`, opacity: 1 - (translateY / getWindowHeight()) });

  const heading = <animated.h1 ref={heroRef} style={animation ? h1Props : {}} className="tracking-tight text-name text-center mb-1">Sam Brocklehurst</animated.h1>;
  const subHeading = <animated.h2 style={animation ? h2Props : {}} className="tracking-tight text-center text-opacity font-medium text-main">Full-Stack Developer</animated.h2>;

  const items = [heading, subHeading];

  return (
    <section className="flex flex-col h-screen py-12">
      <TransitionGroup component={null}>
        <div className="my-auto">
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