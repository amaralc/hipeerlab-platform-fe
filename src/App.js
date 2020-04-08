import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
        <NavBar />
        <GlobalStyle />
        <main>{this.props.children}</main>
        <Footer />
      </BrowserRouter>
    );
  }
}
