import React from "react";

import Header from "../components/Header";
import SuppliesContent from "../components/SuppliesContent";

// import { Container } from './styles';

export default class Supplies extends React.Component {
  render() {
    return (
      <div>
        <Header
          headerTitle="Projetos de insumos hospitalares"
          headerText="Indexação dos projetos de insumos hospitalares
              para utilização em hospitais no combate à COVID-19."
        />
        <SuppliesContent />
      </div>
    );
  }
}
