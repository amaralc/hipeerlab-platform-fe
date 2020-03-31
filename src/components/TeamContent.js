import React from "react";
import Card from "./Card";
import Ventilator from "../img/project-joinville-croped.png";
import FaceShield from "../img/faceShield.png";
import { TeamCard, TeamImg } from "./Layouts/Team/styles";

export default function TeamContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mb-5 ">
          <h2>Sobre a Campanha</h2>
          <hr />
          <p>
            Nós somos engenheiros e estudantes residentes em Florianópolis-SC
            que decidiram, voluntariamente, se unir e buscar uma forma de ajudar
            nosso país no combate ao CORONAVÍRUS (COVID-19). Estamos utilizando
            impressoras 3D para PRODUZIR e DOAR equipamentos de proteção para os
            profissionais de saúde.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 py-3 mb-3">
          <TeamCard>
            <TeamImg imgPath={FaceShield} />
          </TeamCard>
        </div>
        <div className="col-md-4 py-3 mb-3">
          <TeamCard>
            <TeamImg imgPath={FaceShield} />
          </TeamCard>
        </div>
        <div className="col-md-4 py-3 mb-3">
          <TeamCard>
            <TeamImg imgPath={FaceShield} />
          </TeamCard>
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
