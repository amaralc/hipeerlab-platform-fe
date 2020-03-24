import React from "react";
import PageContent from "../components/PageContent";
/* import Carousel from "../components/Carousel"; */
import Header from "../components/Header";
// import { Container } from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/*<Header headerTitle="Precision Engineering Laboratory" />*/}
        {/*<Carousel/>*/}
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="Projetos de Respiradores Mecânicos"
          headerText="Indexação dos projetos de respiradores mecânicos de baixo custo
              para utilização em hospitais no combate ao novo COVID-19."
        />
        <PageContent />
      </div>
    );
  }
}
