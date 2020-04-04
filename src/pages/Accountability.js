import React from "react";
import AccountabilityContent from "./Layouts/Accountability/AccountabilityContent";
import Header from "../components/Header";

export default class Accoutability extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header headerTitle="Prestação de Contas" />
        <AccountabilityContent />
      </div>
    );
  }
}
