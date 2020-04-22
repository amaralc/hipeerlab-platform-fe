import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';

export default function App(props) {
  return (
    <div>
      <NavBar />
      <GlobalStyle />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
