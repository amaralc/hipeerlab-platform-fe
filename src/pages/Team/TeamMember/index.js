import React from "react";
import In from "../img/in.png";
import { TeamCard, TeamImg, Div, InImg, Name, About } from "./styles";

export default function TeamMember(props) {
  return (
    <Div className="col-md-2 py-3 mb-3">
      <TeamCard>
        <TeamImg imgPath={props.imgPath} />
        <Name>{props.name}</Name>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <InImg imgPath={In} />
        </a>
        <About>{props.about}</About>
      </TeamCard>
    </Div>
  );
}
