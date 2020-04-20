import React from "react";
import { CardContainer, Body, Footer, FooterDiv } from "./styles";

export default function Card(props) {
  return (
    <CardContainer>
      <img src={props.imgPath} alt="" />
      <Body>
        <h5>{props.title}</h5>
        <p>{props.text}</p>
        <p>{props.location}</p>
        <p>{props.updatedAt}</p>
        <p>{props.status}</p>
      </Body>
      <Footer>
        <FooterDiv>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.button}
          </a>
        </FooterDiv>
      </Footer>
    </CardContainer>
  );
}
