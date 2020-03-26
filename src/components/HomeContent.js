import React from "react";
import Card from "./Card";
import Ventilator from "../img/project-joinville-croped.png";
import FaceShield from "../img/faceShield.png";
import Donation from "../img/donation.png";

export default function HomeContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 py-3 mb-3">
          <Card
            title="Ajude a causa!"
            location=""
            updatedAt=""
            status=""
            imgPath={Donation}
            url="https://www.instagram.com/p/B-Lj0TNnMcA/"
            button="Link da Campanha"
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
    </div>
  );
}
