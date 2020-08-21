import React from 'react';
import { Title, Row, Column } from './styles';

import Header from '../../components/Header';
import Updates from './Updates';
import References from './References';

export default function Ventilator() {
  return (
    <div>
      {/* inclui o header nos moldes das paginas de conteudo */}
      <Header
        headerTitle="Projeto do Respirador Mecânico"
        headerText="Histórico do projeto de nacionalização do automatizador de AMBU
        open source desenvolvido pela equipe Protofy de Barcelona, na Espanha. O projeto
        de baixo custo tem como objetivo auxiliar hospitais no combate à COVID-19."
      />
      <div className="container">
        <Title>
          <h2>Projeto OxyGEN</h2>
          <hr />
        </Title>
        <Column>
          <div id="video">
            <iframe
              title="Projeto de respirador mecânico hipeerLab"
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/ek0xhZ4vgP8"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="col-md-12 mb-3">
            <Title>
              <h2>Histórico</h2>
              <hr />
            </Title>
          </div>
          <Updates />
        </Column>
      </div>
      <div className="container">
        <Title>
          <h2>Referências</h2>
          <hr />
        </Title>
        <Row>
          <References />
        </Row>
      </div>
    </div>
  );
}
