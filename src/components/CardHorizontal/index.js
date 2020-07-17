import React from 'react';
import { CardContainer, Body, Row } from './styles';

export default function Card(props) {
  return (
    <Row>
      <div className="col-md-3">
        <CardContainer>
          <img src={props.imgPath} alt="" />
        </CardContainer>
      </div>
      <div className="col-md-9">
        <Body>
          <h4>{props.date}</h4>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </Body>
      </div>
    </Row>
  );
}
