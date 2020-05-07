import React, { Component } from 'react';
import { Select } from './styles';
import Producao from './Producao';
import Financas from './Financas';

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
    const { selected } = this.state;
    return (
      <>
        <Select id="mySelect" onChange={this.handleSubmit}>
          <option value="Financas">Finanças</option>
          <option value="Producao">Produção</option>
        </Select>
        <hr />
        <br />
        {selected === '1' ? <Financas /> : <Producao />}
      </>
    );
  }
}
