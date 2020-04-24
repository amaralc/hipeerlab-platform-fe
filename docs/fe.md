# hipeerLab Web

## Indice

  * [Configurando Reactotron](#configurando-reactotron)
  * [Rotas Privadas](#rotas-privads)
  * [Layouts por Pagina](#layouts-por-pagina)

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

## Layoutes por Página
[Voltar para índice](#indice)
[Video](https://skylab.rocketseat.com.br/node/gobarber-web/group/ambiente-inicial-e-conceitos-1/lesson/layouts-por-pagina-1)

  Objetivo: criar templates de telas para usuários logados e não logados;

  * (vscode extensions) Instala extensão `vscode-styled-components` ;
  * Cria arquivo **pages/_layouts/auth/index.js**:

    ```js
    /* --------------------------------- IMPORTS ---------------------------------*/
    import React from 'react';
    import PropTypes from 'prop-types';
    import { Wrapper } from './styles';

    /* --------------------------------- EXPORTS ---------------------------------*/
    export default function AuthLayout({ children }) {
      return <Wrapper>{children}</Wrapper>;
    }

    /**
    * Define proptypes do componente
    */
    AuthLayout.propTypes = {
      children: PropTypes.element.isRequired,
    };

    ```

  * Cria arquivo **pages/_layouts/default/index.js**:

    ```js
    /* --------------------------------- IMPORTS ---------------------------------*/
    import React from 'react';
    import PropTypes from 'prop-types';
    import { Wrapper } from './styles';

    /* --------------------------------- EXPORTS ---------------------------------*/
    export default function DefaultLayout({ children }) {
      return <Wrapper>{children}</Wrapper>;
    }

    /**
    * Define proptypes do componente
    */
    DefaultLayout.propTypes = {
      children: PropTypes.element.isRequired,
    };

    ```

  * Cria arquivo **pages/_layouts/auth/styles.js**:

    ```js
    import styled from 'styled-components';

    export const Wrapper = styled.div`
      height: 100%;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      min-width: 992px !important;
      background-color: #fff;

      @media (min-width: 576px) {
        max-width: 540px;
      }

      @media (min-width: 768px) {
        max-width: 720px;
      }

      @media (min-width: 992px) {
        max-width: 960px;
      }

      @media (min-width: 1200px) {
        max-width: 1140px;
      }
    `;

    ```

  * Cria arquivo **pages/_layouts/default/styles.js**:

    ```js
    import styled from 'styled-components';

    export const Wrapper = styled.div`
      height: 100%;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      min-width: 992px !important;
      background-color: #fff;

      @media (min-width: 576px) {
        max-width: 540px;
      }

      @media (min-width: 768px) {
        max-width: 720px;
      }

      @media (min-width: 992px) {
        max-width: 960px;
      }

      @media (min-width: 1200px) {
        max-width: 1140px;
      }

      h1 {
        color: #38b6ff;
      }
    `;

    ```

  * Importa layouts nas rotas e cria condições de renderização:

    ```js
    /* --------------------------------- IMPORTS ---------------------------------*/
    import React from 'react';
    import PropTypes from 'prop-types';
    import { Route, Redirect } from 'react-router-dom';

    import AuthLayout from '../pages/_layouts/auth';
    import DefaultLayout from '../pages/_layouts/default';

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
      const signed = true;

      /**
      * Aplica condicoes de redirecionamento do usuario
      */
      if (!signed && isPrivate) {
        return <Redirect to="/signin" />;
      }

      if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />;
      }

      const Layout = signed ? DefaultLayout : AuthLayout;
      /**
      * Se nao requer redirecionamento, retorna rota com mesmo componente definido
      * nas props
      */
      return (
        <Route
          {...rest}
          /**
          * Recebe todas as propriedades da tela
          */
          render={(props) => (
            /**
            * Renderiza layout e componente dentro do layout
            */
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      );
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


