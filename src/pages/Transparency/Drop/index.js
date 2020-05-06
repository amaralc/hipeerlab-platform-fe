import React, { Component } from 'react';
import { Title } from '../styles';

export default class Drop extends Component {
  state = {
    selected: '1',
  };

  handleSubmit = async (e) => {
    const x = document.getElementById('mySelect').value;

    if (x === 'Financas') {
      this.setState({
        selected: '1',
      });
    }

    if (x === 'Producao') {
      this.setState({
        selected: '2',
      });
    }
  };

  render() {
    return (
      <select id="mySelect" onChange={this.handleSubmit}>
        <option value="Financas">
          <Title>
            <h2>Finanças</h2>
          </Title>
        </option>
        <option value="Produção">
          <Title>
            <h2>Produção</h2>
          </Title>
        </option>
      </select>
    );
  }
}
