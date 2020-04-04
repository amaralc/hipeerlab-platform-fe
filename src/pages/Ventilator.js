import React from "react";
import VentilatorContent from "./Layouts/Ventilator/VentilatorContent";
import Header from "../components/Header";

export default class Ventilator extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="Projetos de Respiradores Mecânicos"
          headerText="Indexação dos projetos de respiradores mecânicos de baixo custo
              para utilização em hospitais no combate à COVID-19."
        />
        <VentilatorContent />
      </div>
    );
  }
}
