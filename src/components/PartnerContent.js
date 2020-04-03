import React from "react";

import Eme from "../img/eme.png";
import Ngd from "../img/ngd.png";
import Pronto from "../img/pronto.png";

import { TeamCard, TeamImg, Div, Row } from "./Layouts/Partner/styles";

export default function HomeContent() {
  return (
    <div className="container">
      <Row className="row">
        <Div>
          <TeamCard>
            <TeamImg imgPath={Ngd} />
          </TeamCard>
        </Div>
        <Div>
          <TeamCard>
            <TeamImg imgPath={Eme} />
          </TeamCard>
        </Div>

        <Div>
          <TeamCard>
            <TeamImg imgPath={Pronto} />
          </TeamCard>
        </Div>
      </Row>
    </div>
  );
}
