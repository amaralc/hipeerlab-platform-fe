import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Wrapper, Content } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/hipeerlab.ico';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
    console.tron.log(email, password);
  }

  return (
    <>
      <Wrapper>
        <Content>
          <img src={logo} height="50px" alt="hipeerLab" />
          <h5>Faça o login</h5>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Digite seu e-mail" />
            <Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
            />
            <button type="submit">
              {loading ? 'Carregando...' : 'Acessar'}
            </button>
            <Link to="/signup">Criar conta</Link>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}
