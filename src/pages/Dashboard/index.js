import React from 'react';
import Header from '../../components/Header';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header headerTitle="Dashboard" />
      <div className="container">
        <h5>Você está conectado</h5>
      </div>
    </>
  );
}
