import React from "react";
import TeamContent from "./Layouts/Team/TeamContent";
import Header from "../components/Header";

export default class Team extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="Equipe hipeerLab"
          headerText="Engenheiros, artistas e estudantes residentes em 
        Florianópolis-SC unidos no combate ao CORONAVÍRUS (COVID-19). Utilizamos
        impressoras 3D para PRODUZIR e DOAR equipamentos de proteção e equipamentos
        emergenciais hospitalares para profissionais de saúde e outros em situação
        de vulnerabilidade."
        />
        <TeamContent />
      </div>
    );
  }
}
