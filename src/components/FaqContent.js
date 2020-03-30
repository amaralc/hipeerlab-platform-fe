import React from "react";
import Card from "./Card";
import Ventilator from "../img/project-joinville-croped.png";
import FaceShield from "../img/faceShield.png";

export default function FaqContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mb-5 ">
          <h5>A iniciativa hipeerLab possui lucro?</h5>
          <p>Não.</p>
          <h5>É possível comprar ou revender os produtos da hipeerLab?</h5>
          <p>ok</p>
          <h5>Como posso ajudar com a iniciativa da hipeerLab?</h5>
          <p></p>
          <h5>Tenho uma impressora 3D e gostaria de ajudar. Como faço?</h5>
          <p></p>
          <h5>
            Como posso fazer a higienização das máscaras de proteção Face
            Shield?
          </h5>
          <p></p>
          <h5>Os produtos possuem certificados de aprovação?</h5>
          <p></p>
          <h5>Como posso fazer um pedido?</h5>
          <p></p>
          <h5>Qual o máximo de unidades que posso solicitar?</h5>
          <p></p>
          <h5></h5>
          <p></p>
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
