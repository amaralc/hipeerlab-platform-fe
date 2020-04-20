import React from "react";
import Card from "../../components/Card";
import Ventilator from "../Ventilator/img/project-hipeerlab-v3-croped.png";
import FaceShield from "../../img/faceShield.png";
import Donation from "../../img/donation.png";
import Eme from "../../img/eme.png";
import Ngd from "../../img/ngd.png";
import Pronto from "../../img/pronto.png";
import Lmp from "../../img/lmp.png";
import Comunave from "../../img/comunave.png";

import { Div, Title } from "./styles";

import { TeamCard, TeamImg, Row } from "../Partner/styles";

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
            <div className="col-md-8 mb-5">
              <Title>
                <p>
                  O que fazemos
                </p>
              </Title>
              <hr />
              <p>
                Formamos um grande laboratório, distribuído nas casas dos membros
                e em espaços físicos de outras instituições parceiras. Cada um
                de nós contribui com sua iniciativa, equipamentos e habilidades,
                da maneira como pode e quando tem disponibilidade.
              </p>
              <p>
                
              </p>
              
            </div>
            <div className="col-md-4 mb-5">
              <Title><p>O que fazemos</p></Title>
              <hr />
              <address>
                <strong>LMP</strong>
                <br />
                R. Eng. Agronômico Andrei Cristian Ferreira, s/n
                <br />
                Trindade, Florianópolis, SC
                <br />
                CEP 88040-900
                <br />
              </address>
              <address>
                <abbr title="Phone">P:</abbr>
                +55 (48) 3271-7229
                <br />
                <abbr title="Email">E:</abbr>
                <a href="mailto:#"> lmp@ufsc.br</a>
              </address>
            </div>
          </div>
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
