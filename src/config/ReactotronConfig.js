/* --------------------------------- IMPORTS ---------------------------------*/
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

/* --------------------------------- CONTENT ---------------------------------*/
/**
 * Se usuário estiver em ambiente de desenvolvimento, conecta reactotron
 */
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  /**
   * Disponibiliza reactotron para toda a aplicação
   */
  console.tron = tron;
}

/* --------------------------------- EXPORTS ---------------------------------*/
