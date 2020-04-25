import React from 'react';
import Header from '../../components/Header';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <Header headerTitle="Sign In" />
      <div className="container">
        <h5>Você está desconectado</h5>
      </div>
    </>
  );
}
