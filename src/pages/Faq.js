import React from "react";
import FaqContent from "../components/FaqContent";
import Header from "../components/Header";

export default class Faq extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header headerTitle="Perguntas Frequentes" />
        <FaqContent />
      </div>
    );
  }
}
