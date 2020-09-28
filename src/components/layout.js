import React from 'react';
import Header from './header';
import GlobalStyle from '../styles/GlobalStyle';

const Layout = ({ children }) => {
  return (
    <div id='root'>
      <GlobalStyle />
      <Header />
      {children}
    </div>
  )
}

export default Layout;