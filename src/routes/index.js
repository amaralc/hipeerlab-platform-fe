import React from "react";
import { Switch, Redirect } from "react-router-dom";

import Route from "./Route";

import Ventilator from "../pages/Ventilator/index";
import Supplies from "../pages/Supplies/index";
import Home from "../pages/Home/index";
import Donate from "../pages/Donate/index";
import Faq from "../pages/Faq/index";
import Team from "../pages/Team/index";
import Equipment from "../pages/Equipment/index";
import Newequip from "../pages/Newequip/index";
import Login from "../pages/Login/index";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contribua" component={Donate} />
      <Route path="/suprimentos" component={Supplies} />
      <Route path="/respiradores" component={Ventilator} />
      <Route path="/faq" component={Faq} />
      <Route path="/equipe" component={Team} />
      <Route path="/listequipment" component={Equipment} isPrivate />
      <Route path="/cadastroequip" component={Newequip} isPrivate />
      <Route path="/login" component={Login} />

      {/*<Route path="/contabilidade" component={Accountability} />*/}
      <Redirect to="/" />
    </Switch>
  );
}
