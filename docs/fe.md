# hipeerLab Web

## Indice

  * [Configurando Reactotron](#configurando-reactotron)
  * [Rotas Privadas](#rotas-privads)

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

## Rotas privadas
[Voltar para índice](#indice)
[Video](https://skylab.rocketseat.com.br/node/gobarber-web/group/ambiente-inicial-e-conceitos-1/lesson/rotas-privadas-1)

  Objtivo: configurar rotas privadas que para serem acessadas precisam cumprir
  com determinados requisitos ou condições.

  * Cria tag `<h1>` em **Dashboard/index.js** para teste da rota /dashboard:

    ```js
    import React from 'react';

    // import { Container } from './styles';

    export default function Dashboard() {
      return <h1>Dashboard</h1>;
    }
    ```

  * Cria tag `<h1>` em **SignIn/index.js** para teste da rota /signin:

    ```js
    import React from 'react';

    // import { Container } from './styles';

    export default function SignIn() {
      return <h1>Dashboard</h1>;
    }
    ```

  * Cria componente **routes/Route.js** customizado para incluir regras de redirecionamento:

    ```js
    /* --------------------------------- IMPORTS ---------------------------------*/
    import React from 'react';
    import PropTypes from 'prop-types';
    import { Route, Redirect } from 'react-router-dom';

    /* --------------------------------- EXPORTS ---------------------------------*/
    /**
    * Cria componente de roteamento modificado, com condições de roteamento
    */
    export default function RouteWrapper({
      component: Component,
      /**
      * Passa propriedade isPrivate que por padrão é 'false'
      */
      isPrivate,
      /**
      * Passa demais propriedades do componente
      */
      ...rest
    }) {
      /**
      * Cria variavel que define status do usuario na aplicacao
      */
      const signed = false;

      /**
      * Aplica condicoes de redirecionamento do usuario
      */
      if (!signed && isPrivate) {
        return <Redirect to="/signin" />;
      }

      if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />;
      }

      /**
      * Se nao requer redirecionamento, retorna rota com mesmo componente definido
      * nas props
      */
      return <Route {...rest} component={Component} />;
    }

    /**
    * Define tipos das propriedades de RouteWrapper
    */
    RouteWrapper.propTypes = {
      isPrivate: PropTypes.bool,
      /**
      * Como o componente pode ser function ou class definimos como um dos tipos
      * definidos no array
      */
      component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    };

    /**
    * Define o valor default das propriedades de RouteWrapper
    */
    RouteWrapper.defaultProps = {
      isPrivate: false,
    };

    ```

  * (terminal) Importa proptypes: `yarn add prop-types` ;
  * Roda app e testa condições de redirecionamento alterando valor da variavel `signed` ;
