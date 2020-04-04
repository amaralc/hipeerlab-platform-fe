import React from "react";
import DonateContent from "./Layouts/Donate/DonateContent";
import Header from "../components/Header";

export default class Donate extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header headerTitle="Contribua com o Projeto!" />
        <DonateContent />
      </div>
    );
  }
}
