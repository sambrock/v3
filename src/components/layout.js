import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/Theme';
import Header from './header';
import Footer from './footer';
import PageTransition from './transition';

const Layout = ({ children, location }) => {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <PageTransition location={location}>
          <main id="content">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Layout;