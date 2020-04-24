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
