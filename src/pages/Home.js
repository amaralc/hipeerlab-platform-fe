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
          headerTitle="Respiradores e Insumos Hospitalares"
          headerText="Indexação dos projetos de respiradores mecânicos de baixo custo
              e  suprimentos hospitalares para utilização em hospitais no combate ao novo Coronavirus."
        />
        <HomeContent />
      </div>
    );
  }
}
