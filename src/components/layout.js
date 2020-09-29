import React from 'react';
import Header from './header';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div id='root'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Layout;