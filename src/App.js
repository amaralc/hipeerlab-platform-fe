import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";

import "./config/ReactotronConfig";

import Routes from "./routes";

import history from "./services/history";
import { store } from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
          <NavBar />
          <GlobalStyle />
          <main>{this.props.children}</main>
          <Footer />
        </Router>
      </Provider>
    );
  }
}
