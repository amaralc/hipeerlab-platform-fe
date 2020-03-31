import React from "react";
import Card from "./Card";
import Ventilator from "../img/project-joinville-croped.png";
import FaceShield from "../img/faceShield.png";
import Donation from "../img/donation.png";
import In from "../img/in.png";
import {
  TeamCard,
  TeamImg,
  Div,
  InImg,
  Name,
  About,
  Title
} from "./Layouts/Team/styles";

export default function TeamContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mb-5 ">
          <h2>Sobre a Equipe</h2>
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

      <Title className="py-3 mb-3">
        <p>Website</p>
        <hr />
      </Title>

      <div className="row">
        <Div className="col-md-2 py-3 mb-3">
          <TeamCard>
            <TeamImg imgPath={Donation} />
            <Name>Bruno Weber</Name>
            <InImg imgPath={In} />
            <About>Graduando em Engenharia Mecânica</About>
          </TeamCard>
        </Div>
        <Div className="col-md-2 py-3 mb-3">
          <TeamCard>
            <TeamImg imgPath={Donation} />
            <Name>Bruno Weber</Name>
            <InImg imgPath={In} />
            <About>Engenheiro Mecânico</About>
          </TeamCard>
        </Div>
        <Div className="col-md-2 py-3 mb-3">
          <TeamCard>
            <TeamImg imgPath={Donation} />
            <Name>Bruno Weber</Name>
            <InImg imgPath={In} />
            <About>Graduando em Engenharia Mecânica</About>
          </TeamCard>
        </Div>
        <Div className="col-md-2 py-3 mb-3">
          <TeamCard>
            <TeamImg imgPath={Donation} />
            <Name>Bruno Weber</Name>
            <InImg imgPath={In} />
            <About>Engenheiro Mecânico</About>
          </TeamCard>
        </Div>
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
