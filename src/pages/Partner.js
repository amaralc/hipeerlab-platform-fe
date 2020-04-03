import React from "react";
import PartnerContent from "../components/PartnerContent";
/* import Carousel from "../components/Carousel"; */
import Header from "../components/Header";
// import { Container } from './styles';

export default class Partner extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="Parceiros hipeerLab"
          headerText="Agimos de maneira colaborativa com parceiros de instituições
          públicas e privadas para fabricar, montar, distribuir e comunicar os resultados
          de nossas ações."
        />
        <PartnerContent />
      </div>
    );
  }
}
