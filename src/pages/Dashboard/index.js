import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Header from '../../components/Header';
import UserHeader from '~/components/UserHeader';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header headerTitle="Dashboard" />
      <div className="container">
        <UserHeader />
        <Container>
          <header>
            <button type="button">
              <MdChevronLeft size={36} color="#000" />
            </button>
            <strong>31 de Maio</strong>
            <button type="button">
              <MdChevronRight size={36} color="#000" />
            </button>
          </header>
          <ul>
            <Time past>
              <strong>08:00</strong>
              <span>User 4</span>
            </Time>
            <Time available>
              <strong>09:00</strong>
              <span>Em aberto</span>
            </Time>
            <Time>
              <strong>10:00</strong>
              <span>User 5</span>
            </Time>
            <Time>
              <strong>11:00</strong>
              <span>User 4</span>
            </Time>
          </ul>
        </Container>
      </div>
    </>
  );
}
