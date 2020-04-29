import React from 'react';
import { CardLink, Image, InfoContainer, InfoTitle, InfoDate } from './styles';

export default function NewsCard(props) {
  return (
    <CardLink href={props.link} target="_blank" rel="noopener noreferrer">
      <Image height="76px" width="76px" src={props.image} alt="" />
      <InfoContainer>
        <InfoTitle>{props.title}</InfoTitle>
        <InfoDate>{props.date}</InfoDate>
      </InfoContainer>
    </CardLink>
  );
}
