import React, { Component } from 'react';
import { Select } from './styles';
import Gerais from './Gerais';
import Respirador from './Respirador';

export default class Drop extends Component {
  state = {
    selected: '1',
  };

  handleSubmit = async (e) => {
    const x = document.getElementById('mySelect').value;

    if (x === 'Gerais') {
      this.setState({
        selected: '1',
      });
    }

    if (x === 'Respirador') {
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
          <option value="Gerais">Gerais</option>
          <option value="Respirador">Respirador</option>
        </Select>
        <hr />
        <br />
        {selected === '1' ? <Gerais /> : <Respirador />}
      </>
    );
  }
}
