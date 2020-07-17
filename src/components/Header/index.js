/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';

import { HeaderDiv, Container, Row, Div } from './styles';

/* --------------------------------- EXPORTS ---------------------------------*/
export default function Header(props) {
  return (
    <HeaderDiv>
      <Container className="container">
        <Row>
          <Div>
            {/** Define por meio das props os textos do Header */}
            <h1>{props.headerTitle}</h1>
            <p>{props.headerText}</p>
          </Div>
        </Row>
      </Container>
    </HeaderDiv>
  );
}
