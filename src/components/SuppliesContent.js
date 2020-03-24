import React from "react";
import Card from "./Card";
import faceShield from "../img/faceShield.png";

export default function PageSupplies() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 mb-5">
          <Card
            title="Face Shields"
            location="Brasil"
            updatedAt="23/03/2020"
            status="Em operação"
            imgPath={faceShield}
            url="https://www.fablabjoinville.com.br/covid19/"
          />
        </div>
      </div>
    </div>
  );
}
