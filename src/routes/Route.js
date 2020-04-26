/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

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
  const { signed } = store.getState().auth;

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
   * Define qual layout aplicar a partir de condicao determinada
   */
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
