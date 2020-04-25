import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import Header from '../../components/Header';
import { Wrapper, Content } from './styles';

// import { Container } from './styles';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Header headerTitle="Sign Up" />
      <div className="container">
        <Wrapper>
          <Content>
            <Form onSubmit={handleSubmit}>
              <h5>Crie sua conta</h5>
              <Input name="name" placeholder="Nome completo" />
              <Input
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
              <Input
                name="password"
                type="password"
                placeholder="Digite sua senha"
              />
              <button type="submit">Acessar</button>
              <Link to="/signin">Já sou cadastrado</Link>
            </Form>
          </Content>
        </Wrapper>
      </div>
    </>
  );
}
