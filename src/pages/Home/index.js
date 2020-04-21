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
          headerTitle="Iniciativa COVID-19"
          headerText="Nos reunimos para auxiliar no combate à propagação da COVID-19.
          No momento estamos projetando e fabricando um respirador mecânico de baixo
          custo, assim como fabricando e doando face shields."
        />
        <div className="container">
          <Row>
            <div className="col-md-8 mb-5">
              <Title>
                <h2>Quem somos</h2>
              </Title>
              <hr />
              <p>
                Somos um laboratório distribuído. Cada parte dos recursos que 
                contribui com o hipeerLab se encontra nas casas de indivíduos e 
                em instituições independentes. Somos uma organização dinâmica,
                que se expande e se contrai enquanto se adapta às circunstâncias.
              </p>
              <p>
                Em Março de 2020 nos adaptamos para fabricar e doar mais de 700
                face shields para profissionais de saúde e outros em situação de
                vulnerabilidade. Em Abril do mesmo ano colocamos o primeiro protótipo
                de respirador mecânico em funcionamento. 
              </p>
            </div>
            <div className="col-md-4 mb-5">
              <Title>
                <h2>Contato</h2>
              </Title>
              <hr />
              <address>
                <strong>hipeerLab</strong>
                <br />
                Proximidades da UFSC campus Trindade
                <br />
                Florianópolis, SC                
                <br />
              </address>
              <address>
                <span title="Slack">Slack:</span>
                <a href="https://hipeerlab.slack.com"> hipeerlab.slack.com</a>
                <br />
                <span title="Email">E-mail:</span>
                <a href="mailto:#"> hipeerlab@gmail.com</a>
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
