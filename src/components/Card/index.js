/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';
import { CardContainer, Body, Footer, FooterDiv } from './styles';

/* --------------------------------- EXPORTS ---------------------------------*/
export default function Card(props) {
  return (
    <CardContainer>
      {/** Por meio das props define a imagem do Card */}
      <img src={props.imgPath} alt="" />
      <Body>
        {/** Por meio das props define os textos do botão do Card */}
        <h5>{props.title}</h5>
        <p>{props.text}</p>
        <p>{props.location}</p>
        <p>{props.updatedAt}</p>
        <p>{props.status}</p>
      </Body>
      <Footer>
        <FooterDiv>
          {/** Por meio das props define o texto e URL do botão do Card */}
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.button}
          </a>
        </FooterDiv>
      </Footer>
    </CardContainer>
  );
}
