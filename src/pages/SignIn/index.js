import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import Header from '../../components/Header';
import { Wrapper, Content } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Header headerTitle="Sign In" />
      <Wrapper>
        <Content>
          <h5>Faça o login</h5>
          <Form onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Digite seu e-mail" />
            <Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
            />
            <button type="submit">Acessar</button>
            <Link to="/signup">Criar conta</Link>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}
