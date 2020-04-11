import React from "react";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "./config/ReactotronConfig";

import { store } from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
          <NavBar />
          <GlobalStyle />
          <main>{this.props.children}</main>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}
