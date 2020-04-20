import React from "react";
import { PartnerCard, PartnerImg, Div } from "./styles";

export default function Partner(props) {
  return (
    <Div>
      <PartnerCard>
        <PartnerImg imgPath={props.imgPath} />
      </PartnerCard>
    </Div>
  );
}
