import React from 'react';
import Header from '../../components/Header';

// import { Container } from './styles';

export default function Profile() {
  return (
    <>
      <Header headerTitle="Profile" />
      <div className="container">
        <h5>Você está conectado</h5>
      </div>
    </>
  );
}
