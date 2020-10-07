import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/Theme';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div id='root'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main id="content">
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Layout;