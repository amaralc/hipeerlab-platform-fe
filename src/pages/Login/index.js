/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import Header from "../../components/Header";

import { Wrapper, Content } from "./styles";
import * as Yup from "yup";

import { signInRequest } from "../../store/modules/auth/actions";

/* --------------------------------- EXPORTS ---------------------------------*/

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido.")
    .required("O e-mail é obrigatório."),
  password: Yup.string().required("A senha é obrigatória."),
});

export default function Login() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
    console.tron.log(email, password);
  }
  return (
    <>
      {/* inclui o header nos moldes das paginas de conteudo */}
      <Header headerTitle="Página de Login" />
      <Wrapper>
        <Content>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Seu e-mail" />
            <Input
              name="password"
              type="password"
              placeholder="Sua senha secreta"
            />
            <button type="submit">Login</button>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}
