import React from "react";
import Card from "./Card";
import faceShield from "../img/faceShield.png";
import medicalShield from "../img/medicalshield.png";
import hipeerShields from "../img/hipeerShields.png";
import tiaraAcetato from "../img/mascara-tiara-acetato.png";

export default function SuppliesContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 mb-5">
          <Card
            title="Voluntários HipeerLab"
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
            title="Face Shields"
            location="Brasil"
            updatedAt="25/03/2020"
            status="Em operação"
            imgPath={faceShield}
            url="https://www.fablabjoinville.com.br/covid19/"
            button="Ver Projeto"
          />
        </div>
        <div className="col-md-3 mb-5">
          <Card
            title="Medical Shield"
            location="Polônia"
            updatedAt="24/03/2020"
            status="Em operação"
            imgPath={medicalShield}
            url="https://hackaday.io/project/170481-laser-cut-medical-shield"
            button="Ver Projeto"
          />
        </div>
        <div className="col-md-3 mb-5">
          <Card
            title="Máscara facial com acetato e tiara"
            location="Polônia"
            updatedAt="02/04/2020"
            status="Em operação"
            imgPath={tiaraAcetato}
            url="https://www.youtube.com/watch?v=AKJjZ7m8A7c"
            button="Ver Projeto"
          />
        </div>
      </div>
    </div>
  );
}
