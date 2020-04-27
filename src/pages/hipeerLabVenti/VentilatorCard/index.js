import React from 'react';
import { CardContainer, Body } from './styles';

export default function Card(props) {
  return (
    <CardContainer>
      <img src={props.imgPath} alt="" />
      <Body>
        <h5>{props.title}</h5>
        <p>{props.status}</p>
      </Body>
    </CardContainer>
  );
}
