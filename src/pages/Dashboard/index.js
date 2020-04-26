import React from 'react';
import Header from '../../components/Header';
import api from '~/services/api';

// import { Container } from './styles';

export default function Dashboard() {
  api.get('appointments');
  return (
    <>
      <Header headerTitle="Dashboard" />
      <div className="container">
        <h5>Você está conectado</h5>
      </div>
    </>
  );
}
