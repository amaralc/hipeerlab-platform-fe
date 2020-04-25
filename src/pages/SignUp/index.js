import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Wrapper, Content } from './styles';

// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <Header headerTitle="Sign Up" />
      <div className="container">
        <Wrapper>
          <Content>
            <form>
              <h5>Crie sua conta</h5>
              <input placeholder="Nome completo" />
              <input type="email" placeholder="Digite seu e-mail" />
              <input type="password" placeholder="Digite sua senha" />
              <button type="submit">Acessar</button>
              <Link to="/signin">Já sou cadastrado</Link>
            </form>
          </Content>
        </Wrapper>
      </div>
    </>
  );
}
