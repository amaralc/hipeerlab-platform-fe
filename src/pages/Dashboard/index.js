import React from 'react';
import Header from '../../components/Header';
import api from '~/services/api';
import UserHeader from '~/components/UserHeader';

// import { Container } from './styles';

export default function Dashboard() {
  api.get('appointments');
  return (
    <>
      <Header headerTitle="Dashboard" />
      <div className="container">
        <UserHeader />
      </div>
    </>
  );
}
