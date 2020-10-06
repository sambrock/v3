import React from 'react';
import Header from './header';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import SocialIcons, { Email } from './social-icons';
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
        <div id="left-half-color" />
        <div id="right-half-color" />
      </ThemeProvider>
    </div>
  )
}

export default Layout;