/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

/**
 * Importação do store precisa vir depois da importação do reactotron
 */
import store from './store';
import GlobalStyle from './styles/global';

/* --------------------------------- EXPORTS ---------------------------------*/
export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}
