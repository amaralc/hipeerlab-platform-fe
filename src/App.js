import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";

import "./config/ReactotronConfig";

import Routes from "./routes";

import history from "./services/history";
import { store, persistor } from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <NavBar />
            <GlobalStyle />
            <main>{this.props.children}</main>
            <Footer />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
