# hipeerLab Web

## Indice

  * [Configurando Reactotron](#configurando-reactotron)

## Configurando Reactotron
[Voltar para índice](#indice)
[Video](https://skylab.rocketseat.com.br/node/gobarber-web/group/ambiente-inicial-e-conceitos-1/lesson/configurando-reactotron-4)

  Objtivo: deixar Reactotron configurado (ferramenta de terceiro que auxilia no
  processo de avaliação da comunicação entre frontend e backend). Para maiores
  informações confira aula [Configurando Reactotron](https://skylab.rocketseat.com.br/node/primeiro-projeto-com-react-native-1)
  do primeiro projeto com React Native.

  * (terminal) Instala reactotron: `yarn add reactotron-react-js` ;
  * Cria arquivo **src/config/ReactotronConfig.js**:

    ```js
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
    ```

  * Importa reactotron em **App.js**:

    ```js
    /* --------------------------------- IMPORTS ---------------------------------*/
    import React from 'react';
    import { Router } from 'react-router-dom';
    import './config/ReactotronConfig';

    import Routes from './routes';
    import history from './services/history';

    /* --------------------------------- CONTENT ---------------------------------*/
    /* --------------------------------- EXPORTS ---------------------------------*/
    export default function App() {
      return (
        <Router history={history}>
          <Routes />
        </Router>
      );
    }
    ```

  * Abre Reactotron;
  * (terminal) Roda projeto: `yarn start` ;
  * Verifica se houve conexão com Reactotron;
