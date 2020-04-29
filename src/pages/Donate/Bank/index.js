import React, { Component } from 'react';
import { Address } from './styles';

export default class Bank extends Component {
  state = {
    titular: ' Rafael Gomes Nunes Silva',
    agencia: ' 1453-2',
    conta: ' 60818-1',
  };

  handleSubmit = async (e) => {
    const x = document.getElementById('mySelect').value;

    if (x === 'BB') {
      this.setState({
        titular: ' Rafael Gomes Nunes Silva',
        agencia: ' 1453-2',
        conta: ' 60818-1',
      });
    }

    if (x === 'NuBank') {
      this.setState({
        titular: ' Rafael Nunes',
        agencia: ' 0001',
        conta: ' 75376319-9',
      });
    }

    if (x === 'Caixa') {
      this.setState({
        titular: ' Bruno Weber de Castro',
        agencia: ' 0921',
        conta: ' 013 00135995-8',
      });
    }
    if (x === 'Bradesco') {
      this.setState({
        titular: ' Calil Amaral',
        agencia: ' 2727',
        conta: ' 00135995-8',
      });
    }
  };

  render() {
    const { titular, agencia, conta } = this.state;
    return (
      <>
        <Address>
          <strong>Banco:</strong>
          <select id="mySelect" onChange={this.handleSubmit}>
            <option value="BB">Banco do Brasil (001)</option>
            <option value="Caixa">Caixa Econômica Federal (024)</option>
            <option value="Bradesco">Bradesco (237)</option>
            <option value="NuBank">NuBank (260)</option>
          </select>
          <br />
          <strong>Titular:</strong>
          {titular}
          <br />
          <strong>Agência:</strong>
          {agencia}
          <br />
          <strong>Conta corrente:</strong>
          {conta}
          <br />
          <br />
          Entre em contato caso precise do nº do CPF:
          <br />
          <abbr title="Phone">
            <strong>WhatsApp:</strong>
          </abbr>
          <span> +55 (48) 99800-6530</span>
        </Address>
      </>
    );
  }
}
