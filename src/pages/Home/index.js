import React from "react";
import Card from "../../components/Card";
import Ventilator from "../../img/project-hipeerlab-v2-croped.png";
import FaceShield from "../../img/faceShield.png";
import Donation from "../../img/donation.png";
import Eme from "../../img/eme.png";
import Ngd from "../../img/ngd.png";
import Pronto from "../../img/pronto.png";
import Lmp from "../../img/lmp.png";
import Comunave from "../../img/comunave.png";

import { TeamCard, TeamImg, Div, Row, Title } from "../Partner/styles";

import Header from "../../components/Header";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="COVID-19: Equipamentos emergenciais"
          headerText="Indexação dos projetos de equipamentos hospitalares emergenciais para auxílio no combate à COVID-19."
        />
        <div className="container">
          <div className="row">
            <div className="col-md-4 py-3 mb-3">
              <Card
                title="Ajude  a causa!"
                location=""
                updatedAt=""
                status=""
                imgPath={Donation}
                url="/contribua"
                button="Contribua!"
              />
            </div>
            <div className="col-md-4 py-3 mb-3">
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
            <div className="col-md-4 py-3 mb-3">
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
          <Row className="row">
            <Title className="py-3 mb-3">
              <p>Parceiros</p>
              <hr />
            </Title>
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
            <Div>
              <TeamCard>
                <TeamImg imgPath={Lmp} />
              </TeamCard>
            </Div>
            <Div>
              <TeamCard>
                <TeamImg imgPath={Comunave} />
              </TeamCard>
            </Div>
          </Row>
        </div>
      </div>
    );
  }
}
