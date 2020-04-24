import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Donate from '../pages/Donate';
import Supplies from '../pages/Supplies';
import Ventilator from '../pages/Ventilator';
import Faq from '../pages/Faq';
import Team from '../pages/Team';
import Transparency from '../pages/Transparency';
import News from '../pages/News';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import GlobalStyle from '../styles/global';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contribua" component={Donate} />
        <Route path="/suprimentos" component={Supplies} />
        <Route path="/respiradores" component={Ventilator} />
        <Route path="/faq" component={Faq} />
        <Route path="/equipe" component={Team} />
        <Route path="/transparencia" component={Transparency} />
        <Route path="/noticias" component={News} />

        <Route path="/login" exact component={SignIn} />
        <Route path="/register" component={SignUp} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </>
  );
}
