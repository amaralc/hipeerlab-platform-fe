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
