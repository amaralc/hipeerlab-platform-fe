import React from "react";
import HomeContent from "../components/HomeContent";
/* import Carousel from "../components/Carousel"; */
import Header from "../components/Header";
// import { Container } from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="Equipamentos emergenciais"
          headerText="Indexação dos projetos de equipamentos hospitalares emergenciais para auxílio no combate ao COVID-19."
        />
        <HomeContent />
      </div>
    );
  }
}
