import React from "react";
import SuppliesContent from "./Layouts/Supplies/SuppliesContent";
import Header from "../components/Header";

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
