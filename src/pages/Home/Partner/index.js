import React from "react";
import { PartnerCard, PartnerImg, Div, Title, Partners } from "./styles";
import Eme from "../../../img/eme.png";
import Ngd from "../../../img/ngd.png";
import Pronto from "../../../img/pronto.png";
import Lmp from "../../../img/lmp.png";
import Comunave from "../../../img/comunave.png";

function Partner(props) {
  return (
    <Div>
      <PartnerCard>
        <PartnerImg src={props.imgPath} />
      </PartnerCard>
    </Div>
  );
}

export default function PartnersContent() {
  return (
    <Partners>
      <Title className="py-3 mb-3">
        <h2>Parceiros</h2>
        <hr />
      </Title>

      <Partner imgPath={Ngd} />

      <Partner imgPath={Eme} />

      <Partner imgPath={Pronto} />

      <Partner imgPath={Lmp} />

      <Partner imgPath={Comunave} />
    </Partners>
  );
}
