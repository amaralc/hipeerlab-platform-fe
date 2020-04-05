/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";
import Card from "../../components/Card";
import Ventilator from "../../img/project-joinville-croped.png";
import FaceShield from "../../img/faceShield.png";

import { Table } from "./styles";
import Header from "../../components/Header";

/* --------------------------------- EXPORTS ---------------------------------*/
export default class Accoutability extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header headerTitle="Prestação de Contas" />
        <div className="container">
          <Table>
            <tr>
              <th>Entradas</th>
              <th>Saídas</th>
              <th>Descrição das Saídas</th>
            </tr>
            <tr>
              <td>R$ 50,00</td>
              <td>R$ 25,00</td>
              <td>Compra de PLA</td>
            </tr>
            <tr>
              <td>R$ 150,00</td>
              <td>R$ 20,00</td>
              <td>Compra de Acetato</td>
            </tr>
            <tr>
              <td>R$ 150,00</td>
              <td>R$ 20,00</td>
              <td>Compra de Acetato</td>
            </tr>
            <tr>
              <td>R$ 150,00</td>
              <td>R$ 20,00</td>
              <td>Compra de Acetato</td>
            </tr>
            <tr>
              <td>R$ 150,00</td>
              <td>R$ 20,00</td>
              <td>Compra de Acetato</td>
            </tr>
            <tr>
              <td>R$ 150,00</td>
              <td>R$ 20,00</td>
              <td>Compra de Acetato</td>
            </tr>
            <tr>
              <td>R$ 150,00</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>R$ 150,00</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>R$ 150,00</td>
              <td></td>
              <td></td>
            </tr>
          </Table>

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
      </div>
    );
  }
}
