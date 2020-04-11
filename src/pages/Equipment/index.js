import React, { Component } from "react";
import api from "../../services/api";

import Card from "../../components/Card";
import Header from "../../components/Header";

import FaceShield from "../../img/faceShield.png";

export default class Equipment extends Component {
  state = {
    equipment: [],
  };
  async componentDidMount() {
    const response = await api.get("equipment");
    this.setState({ equipment: response.data });
  }
  render() {
    const { equipment } = this.state;

    return (
      <>
        <Header headerTitle="Equipamentos" />
        <div className="container">
          <div className="row">
            {equipment.map((equipment) => (
              <div className="col-md-3 mb-5">
                <Card
                  key={equipment.serial_number}
                  title={equipment.equipment_name}
                  location={equipment.company}
                  updatedAt={equipment.model}
                  status={equipment.state}
                  imgPath={FaceShield}
                  url="https://www.instagram.com/hipeerlab/"
                  button="Ver Equipamento"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
