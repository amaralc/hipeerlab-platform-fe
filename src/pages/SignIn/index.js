import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Wrapper, Content } from './styles';

import logo from '~/assets/hipeerlab.ico';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
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
            <button type="submit">Acessar</button>
            <Link to="/signup">Criar conta</Link>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}
