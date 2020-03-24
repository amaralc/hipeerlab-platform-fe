import React from "react";

import Header from "../components/Header";
import SuppliesContent from "../components/SuppliesContent";

// import { Container } from './styles';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Header headerTitle="About Us" />
        <SuppliesContent />
      </div>
    );
  }
}
