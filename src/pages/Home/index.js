import React from "react";
import Card from "../../components/Card";
import Ventilator from "../Ventilator/img/project-hipeerlab-v3-croped.png";
import FaceShield from "../../img/faceShield.png";
import Donation from "../../img/donation.png";

import { Title, Row } from "./styles";

import PartnersContent from "./Partner";

import Header from "../../components/Header";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="Business Name or Tagline"
          headerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam."
        />
        <div className="container">
          <Row>
            <div className="col-md-8 mb-5">
              <Title>
                <h2>O que fazemos</h2>
              </Title>
              <hr />
              <p>
                Formamos um grande laboratório, distribuído nas casas dos
                membros e em espaços físicos de outras instituições parceiras.
                Cada um de nós contribui com sua iniciativa, equipamentos e
                habilidades, da maneira como pode e quando tem disponibilidade.
              </p>
              <p></p>
            </div>
            <div className="col-md-4 mb-5">
              <Title>
                <h2>O que fazemos</h2>
              </Title>
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
          </Row>
          <Row>
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
          </Row>
          <PartnersContent />
        </div>
      </div>
    );
  }
}
