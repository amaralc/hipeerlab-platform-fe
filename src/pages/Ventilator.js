import React from "react";
import VentilatorContent from "../components/VentilatorContent";
/* import Carousel from "../components/Carousel"; */
import Header from "../components/Header";
// import { Container } from './styles';

export default class Ventilator extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="Projetos de Respiradores Mecânicos"
          headerText="Indexação dos projetos de respiradores mecânicos de baixo custo
              para utilização em hospitais no combate ao novo COVID-19."
        />
        <VentilatorContent />
      </div>
    );
  }
}
