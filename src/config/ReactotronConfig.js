/* --------------------------------- IMPORTS ---------------------------------*/
import Reactotron from 'reactotron-react-js';

/* --------------------------------- CONTENT ---------------------------------*/
/**
 * Se usuário estiver em ambiente de desenvolvimento, conecta reactotron
 */
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().connect();
  tron.clear();

  /**
   * Disponibiliza reactotron para toda a aplicação
   */
  console.tron = tron;
}

/* --------------------------------- EXPORTS ---------------------------------*/
