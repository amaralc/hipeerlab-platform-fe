import React from "react";
import Card from "../../components/Card";
import faceShield from "../../img/faceShield.png";
import medicalShield from "../../img/medicalshield.png";
import hipeerShields from "../../img/hipeerShields.png";
import tiaraAcetato from "../../img/mascara-tiara-acetato.png";
import prusaFaceShield from "../../img/prusaFaceShield.png";
import diyFaceShield from "../../img/diyFaceShield.png";
import ambevFaceShield from "../../img/ambevFaceShield.png";

import Header from "../../components/Header";

// import { Container } from './styles';

export default class Supplies extends React.Component {
  render() {
    return (
      <div>
        <Header
          headerTitle="Projetos de insumos hospitalares"
          headerText="Indexação dos projetos de insumos hospitalares
              para utilização em hospitais no combate à COVID-19."
        />
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-5">
              <Card
                title="Equipe hipeerLab"
                location="Florianópolis, Brasil"
                updatedAt="25/03/2020"
                status="Em operação"
                imgPath={hipeerShields}
                url="https://www.instagram.com/hipeerlab/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="FabLab Joinville"
                location="Joinville, Brasil"
                updatedAt="25/03/2020"
                status="Em operação"
                imgPath={faceShield}
                url="https://www.fablabjoinville.com.br/covid19/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Konrad Klepacki"
                location="Gdynia, Polônia"
                updatedAt="24/03/2020"
                status="Em operação"
                imgPath={medicalShield}
                url="https://hackaday.io/project/170481-laser-cut-medical-shield"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Medicina - USP"
                location="São Paulo, Brasil"
                updatedAt="02/04/2020"
                status="Em operação"
                imgPath={tiaraAcetato}
                url="https://www.youtube.com/watch?v=AKJjZ7m8A7c"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Prusa RC3"
                location="Praga, República Tcheca"
                updatedAt="07/04/2020"
                status="Em operação"
                imgPath={prusaFaceShield}
                url="https://www.prusaprinters.org/prints/25857-prusa-face-shield"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Penang Science Cluster"
                location="Pulau Pinang, Malásia"
                updatedAt="07/04/2020"
                status="Em operação"
                imgPath={diyFaceShield}
                url="https://www.pscpen.com/events/psc-faceshield/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Cervejaria Ambev"
                location="São Paulo, Brasil"
                updatedAt="08/04/2020"
                status="Em operação"
                imgPath={ambevFaceShield}
                url="https://www.linkedin.com/posts/ambev_alaezmdosraejtulos-activity-6653374061483225088-Pds4"
                button="Ver Projeto"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
