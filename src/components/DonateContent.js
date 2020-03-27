import React from "react";
import Card from "./Card";
import Ventilator from "../img/project-joinville-croped.png";
import FaceShield from "../img/faceShield.png";

export default function DonateContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mb-5">
          <h2>Sobre a Campanha</h2>
          <hr />
          <p>
            Nós somos engenheiros residentes em Florianópolis-SC que decidiram,
            voluntariamente, se unir e buscar uma forma de ajudar nosso país no
            combate ao CORONAVÍRUS (COVID-19)!
          </p>
          <p>
            Com isso, estamos utilizando impressoras 3D para PRODUZIR e DOAR
            equipamentos de proteção para os profissionais de saúde. Você também
            pode nos ajudar nessa causa, SEM SAIR DE CASA, fazendo uma doação de
            qualquer valor para a compra de matéria-prima.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <h2>Dados</h2>
          <hr />
          <address>
            <strong>Conta Bancária:</strong>
            <br />
            Banco do Brasil, 001
            <br />
            Rafael Gomes Nunes Silva
            <br />
            AG.: 1453-2
            <br />
            CC.: 60818-1
            <br />
          </address>
          <address>
            <abbr title="Phone">WhatsApp:</abbr>
            +55 (48) 99800-6530
          </address>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 py-3 mb-3">
          <Card
            title="Respiradores"
            location=""
            updatedAt=""
            status=""
            imgPath={Ventilator}
            url="/respiradores"
            button="Ver Projetos"
          />
        </div>
        <div className="col-md-6 py-3 mb-3">
          <Card
            title="Suprimentos"
            location=""
            updatedAt=""
            status=""
            imgPath={FaceShield}
            url="/suprimentos"
            button="Ver Projetos"
          />
        </div>
      </div>
    </div>
  );
}
