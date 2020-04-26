# hipeerLab Web

## Indice

  * [Configurando Reactotron](#configurando-reactotron)
  * [Rotas Privadas](#rotas-privads)
  * [Layouts por Pagina](#layouts-por-pagina)
  * [Utilizando Root Import](#utilizando-root-import)
  .
  .
  .
  .
  .
  .
  .
  .
  * [Exibindo toasts](#exibindo-toasts)


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

## Utilizando Root Import
[Voltar para índice](#indice)
[Video](https://skylab.rocketseat.com.br/node/gobarber-web/group/ambiente-inicial-e-conceitos-1/lesson/utilizando-root-import-1)

  Objetivo: alterar forma de importação de arquivos utilizando pasta raiz 'src' como referência.

  * (terminal) Instala customize-cra e react-app-rewired como dependência de
  desenvolvimento: `yarn add customize-cra react-app-rewired -D` ;

  * (terminal) Instala babel-plugin-root-import como dependência de desenvolvimento:
  `yarn add babel-plugin-root-import -D` ;

  * Cria arquivo **config-overrides.js** na raiz do projeto:

    ```js
    /* --------------------------------- IMPORTS ---------------------------------*/
    /**
    * Desconsiderar erro indicado pelo eslint
    */
    const { addBabelPlugin, override } = require('customize-cra');

    /* --------------------------------- EXPORTS ---------------------------------*/
    module.exports = override(
      addBabelPlugin([
        'babel-plugin-root-import',
        {
          rootPathSuffix: 'src',
        },
      ])
    );
    ```

  * Troca scripts em **package.json** para:

    ```js
    "scripts": {
      "start": "react-app-rewired start",
      "build": "react-app-rewired build",
      "test": "react-app-rewired test",
      "eject": "react-scripts eject"
    },
    ```

  * Altera sintaxe de importação no arquivo **src/routes/Route.js** para:

  ```js
  import AuthLayout from '~/pages/_layouts/auth';
  import DefaultLayout from '~/pages/_layouts/default';

  ```

  * (terminal) Testa se as alterações já estão rodando normalmente: `yarn start` ;

  * (terminal) Instala pacote para informar ao eslint como decifrar a sintaxe com ~/path:
  `yarn add eslint-import-resolver-babel-plugin-root-import -D` ;

  * Cria configuração `settings` no arquivo **.eslintrc.js**:

    ```js
    module.exports = {
      env: {
        browser: true,
        jest: true,
        es6: true,
      },
      extends: [
        'airbnb',
        'prettier',
        'prettier/react'
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: true
      },
      parser: 'babel-eslint',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: [
        'react',
        'jsx-a11y',
        'import',
        'react-hooks',
        'prettier'
      ],
      rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
          'error',
          {extensions: ['.jsx','.js']}
        ],
        'react/jsx-one-expression-per-line': 'off',
        'import/prefer-default-export':'off',
        'react/destructuring-assignment':'off',
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'global-require': 'off',
        'react-native/no-raw-text': 'off',
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        camelcase: 'off',
        'no-console': ['error', { allow: ['tron'] }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-console':'off',
        /**
         * Recomendação: ativar 'react/jsx-props-no-spreading'
        * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
        * Por hora vamos manter 'off' e avaliamos possíveis impactos mais adiante
        */
        'react/jsx-props-no-spreading':'off'
      },
      settings: {
        "import/resolver": {
          "babel-plugin-root-import":{
            rootPathSuffix: "src"
          }
        }
      }
    };

    ```

  * Cria arquivo **jsconfig.json** para configurar redirecionamento ao arquivo ao
  clicar no path enquanto segura Ctrl:

  ```js
  {
    "compilerOptions":{
      "baseUrl":"src",
      "paths":{
        "~/*": ["*"],
      }
    }
  }

  ```

## Configurando Reactotron
[Voltar para índice](#indice)
[Video](https://skylab.rocketseat.com.br/node/gobarber-web/group/cadastro-e-autenticacao-de-usuarios-1/lesson/exibindo-toasts-1)

  Objetivo: instalar módulo que permite envio de mensagens de erro estilizadas ao usuário.

  * (terminal) Instala react-toastify: `yarn add react-toastify` ;

  * Importa e usa ToastContainer em **App.js**:

    ```js
    /* --------------------------------- IMPORTS ---------------------------------*/
    import React from 'react';
    import { ToastContainer } from 'react-toastify';
    import { PersistGate } from 'redux-persist/integration/react';
    import { Provider } from 'react-redux';
    import { Router } from 'react-router-dom';
    import './config/ReactotronConfig';

    import Routes from './routes';
    import history from './services/history';

    /**
    * Importação do store precisa vir depois da importação do reactotron
    */
    import { store, persistor } from './store';
    import GlobalStyle from './styles/global';

    /* --------------------------------- EXPORTS ---------------------------------*/
    export default function App() {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router history={history}>
              <Routes />
              <GlobalStyle />
              <ToastContainer autoClose={3000} />
            </Router>
          </PersistGate>
        </Provider>
      );
    }

    ```

  * Importa estilos de react-toastify em **src/styles/global.js**:

    ```js
    import 'react-toastify/dist/ReactToastify.css';

    ```

  * Importa {toast} e atualiza erros no arquivo **auth/sagas.js**:

    ```js
    /* --------------------------------- IMPORTS ---------------------------------*/
    import { takeLatest, call, put, all } from 'redux-saga/effects';
    import { toast } from 'react-toastify';

    import { signInSuccess, signFailure } from './actions';

    import history from '~/services/history';
    import api from '~/services/api';

    /* --------------------------------- EXPORTS ---------------------------------*/
    export function* signIn({ payload }) {
      try {
        const { email, password } = payload;
        const response = yield call(api.post, 'sessions', {
          email,
          password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
          toast.error('Usuário não é prestador');
          yield put(signFailure());
          return;
        }

        yield put(signInSuccess(token, user));

        history.push('/dashboard');
      } catch (err) {
        toast.error('Falha na autenticação, verifique seus dados');
        yield put(signFailure());
      }
    }

    export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);

    ```





