import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Ventilator from "./pages/Ventilator";
import Supplies from "./pages/Supplies";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Ventilator} />
        <Route path="/suprimentos" component={Supplies} />
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Team} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
