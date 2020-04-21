import React from "react";

import { HeaderDiv, Container, Row, Div } from "./styles";

export default function Header(props) {
  return (
    <HeaderDiv>
      <Container className="container">
        <Row>
          <Div>
            <h1>{props.headerTitle}</h1>
            <p>{props.headerText}</p>
          </Div>
        </Row>
      </Container>
    </HeaderDiv>
  );
}
