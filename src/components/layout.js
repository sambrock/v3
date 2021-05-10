import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Head from './head';
import GlobalStyle from '../styles/GlobalStyle';
import Header from './header';
import Footer from './footer';
import TransitionContextProvider from './transition-context';
import PageTransition from './transition';
import Loader from './loader';
import theme from '../styles/theme';

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Head />
      <div id="root">
        <GlobalStyle />
        {isLoading ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <TransitionContextProvider location={location}>
            <ThemeProvider theme={theme}>
              <Header location={location} />
              <main id="content">
                {children}
              </main>
              <PageTransition location={location} />
              <Footer />
            </ThemeProvider>
          </TransitionContextProvider>
        )
        }
      </div>
    </>
  )
}

export default Layout;