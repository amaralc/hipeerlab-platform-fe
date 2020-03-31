import React from "react";
import TeamContent from "../components/TeamContent";
/* import Carousel from "../components/Carousel"; */
import Header from "../components/Header";
// import { Container } from './styles';

export default class Team extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header headerTitle="Hipeerlab: Equipe" headerText="" />
        <TeamContent />
      </div>
    );
  }
}
