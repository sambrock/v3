import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/Theme';
import Header from './header';
import Footer from './footer';
import TransitionContextProvider from './transition-context';
import PageTransition from './transition';
import Loader from './loader';

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isLoading ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
            <TransitionContextProvider location={location}>
              <Header location={location} />
              <main id="content">
                {children}
              </main>
              <PageTransition location={location} />
              <Footer />
            </TransitionContextProvider>
          )
        }
      </ThemeProvider>
    </div>
  )
}

export default Layout;