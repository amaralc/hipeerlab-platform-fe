/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";
import { Form, Input } from "@rocketseat/unform";
import Header from "../../components/Header";

import { Wrapper, Content } from "./styles";

/* --------------------------------- EXPORTS ---------------------------------*/
export default function Login() {
  return (
    <>
      {/* inclui o header nos moldes das paginas de conteudo */}
      <Header headerTitle="Página de Login" />
      <Wrapper>
        <Content>
          <Form>
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
