import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import Ventilator from "./pages/Ventilator/index";
import Supplies from "./pages/Supplies/index";
import Home from "./pages/Home/index";
import Donate from "./pages/Donate/index";
import Faq from "./pages/Faq/index";
import Team from "./pages/Team/index";
import Accountability from "./pages/Accountability";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contribua" component={Donate} />
        <Route path="/suprimentos" component={Supplies} />
        <Route path="/respiradores" component={Ventilator} />
        <Route path="/faq" component={Faq} />
        <Route path="/equipe" component={Team} />
        <Route path="/contabilidade" component={Accountability} />
        <Redirect to="/" />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
