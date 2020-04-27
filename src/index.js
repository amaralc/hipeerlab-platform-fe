import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Ventilator from './pages/Ventilator/index';
import Supplies from './pages/Supplies/index';
import Home from './pages/Home/index';
import Donate from './pages/Donate/index';
import Faq from './pages/Faq/index';
import News from './pages/News/index';
import Team from './pages/Team/index';
import Transparency from './pages/Transparency';
import hipeerLab_Ventilator from  './pages/hipeerLab_Ventilator/index';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contribua" component={Donate} />
        <Route path="/suprimentos" component={Supplies} />
        <Route path="/respiradores" component={Ventilator} />
        <Route path="/faq" component={Faq} />
        <Route path="/noticias" component={News} />
        <Route path="/equipe" component={Team} />
        <Route path="/transparencia" component={Transparency} />
        <Route path="/hipeerLab_Ventilator" component={hipeerLab_Ventilator} />
        <Redirect to="/" />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
