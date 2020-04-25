import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Wrapper, Content } from './styles';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <Header headerTitle="Sign In" />
      <Wrapper>
        <Content>
          <h5>Faça o login</h5>
          <form>
            <input type="email" placeholder="Digite seu e-mail" />
            <input type="password" placeholder="Digite sua senha" />
            <button type="submit">Acessar</button>
            <Link to="/signup">Criar conta</Link>
          </form>
        </Content>
      </Wrapper>
    </>
  );
}
