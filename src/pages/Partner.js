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
          headerText="Calil faz teu show aqui pls src/pages/Partner.js"
        />
        <PartnerContent />
      </div>
    );
  }
}
