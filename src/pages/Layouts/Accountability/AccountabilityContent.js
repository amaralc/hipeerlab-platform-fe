import React from "react";
import Card from "../../../components/Card";
import Ventilator from "../../../img/project-joinville-croped.png";
import FaceShield from "../../../img/faceShield.png";
import TableLayout from "./index";

export default function AccountabilityContent() {
  return (
    <div className="container">
      <TableLayout />

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
