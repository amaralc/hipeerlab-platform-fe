import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import UserHeader from '~/components/UserHeader';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {}

  return (
    <>
      <Header headerTitle="Profile" />
      <div className="container">
        <UserHeader />
        <Container>
          <Form initialData={profile} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome completo" />
            <Input name="email" type="email" placeholder="Seu e-mail" />

            <hr />

            <Input
              type="password"
              name="oldPassword"
              placeholder="Sua senha atual"
            />
            <Input type="password" name="password" placeholder="Nova senha" />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirmação de senha"
            />

            <button type="submit">Atualizar perfil</button>
          </Form>

          <button type="submit">Sair da conta</button>
        </Container>
      </div>
    </>
  );
}
