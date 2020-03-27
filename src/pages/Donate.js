import React from "react";
import DonateContent from "../components/DonateContent";
import Header from "../components/Header";

export default class Donate extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="COVID-19: Equipamentos emergenciais"
          headerText="Indexação dos projetos de equipamentos hospitalares emergenciais para auxílio no combate à COVID-19."
        />
        <DonateContent />
      </div>
    );
  }
}
