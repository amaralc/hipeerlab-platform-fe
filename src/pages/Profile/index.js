import React from 'react';
import Header from '../../components/Header';
import UserHeader from '~/components/UserHeader';

// import { Container } from './styles';

export default function Profile() {
  return (
    <>
      <Header headerTitle="Profile" />
      <div className="container">
        <UserHeader />
      </div>
    </>
  );
}
