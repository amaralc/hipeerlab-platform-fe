import React from "react";
import Card from "./Card";
import projectJoinville from "../img/project-joinville-croped.png";
import projectOxygen from "../img/project-oxygen-croped.png";
import projectOpenVentilator from "../img/project-open-ventilator-croped.png";
import projectOpenSourceVentilator from "../img/project-open-source-ventilator-croped.png";

export default function VentilatorContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 py-3 mb-3">
          <Card
            title="Fablab Joinville"
            location="Joinville, Brasil"
            updatedAt="23/03/2020"
            status="Validação de protótipo"
            imgPath={projectJoinville}
            url="https://www.fablabjoinville.com.br/covid19/"
            button="Ver Projeto"
          />
        </div>
        <div className="col-md-3 py-3 mb-3">
          <Card
            title="OpenVentilator"
            location="São Paulo, Brasil"
            updatedAt="24/02/2020"
            status="Em fase de projeto"
            imgPath={projectOpenVentilator}
            url="https://www.popsolutions.co/en_US/openventilator"
            button="Ver Projeto"
          />
        </div>
        <div className="col-md-3 py-3 mb-3">
          <Card
            title="OxyGEN Project"
            location="Barcelona, Espanha"
            updatedAt="22/03/2020"
            status="Em operação"
            imgPath={projectOxygen}
            url="https://www.oxygen.protofy.xyz/?fbclid=IwAR3EEDQZRBOmSG8TFY582vxQLQe7skdjRaI8Z67ufgwCjIoil4Q5oWvMpAk"
            button="Ver Projeto"
          />
        </div>
        <div className="col-md-3 py-3 mb-3">
          <Card
            title="Open Source Ventilator"
            location="Dublin, Irlanda"
            updatedAt="21/03/2020"
            status="Validação de protótipo"
            imgPath={projectOpenSourceVentilator}
            url="https://opensourceventilator.ie/"
            button="Ver Projeto"
          />
        </div>
      </div>
    </div>
  );
}
