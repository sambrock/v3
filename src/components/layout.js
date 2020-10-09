import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/Theme';
import Header from './header';
import Footer from './footer';
import TransitionContextProvider from './transition-context';
import PageTransition from './transition';

const Layout = ({ children, location }) => {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <TransitionContextProvider location={location}>
          <GlobalStyle />
          <Header />
          <main id="content">
            {children}
          </main>
          <PageTransition location={location} />
          <Footer />
        </TransitionContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default Layout;