import React from 'react';
import { SubTitle, Row } from '../styles';

// import { Container } from './styles';

export default function Producao() {
  return (
    <>
      <SubTitle>
        <p>Kits com viseira, elástico e suporte</p>
        <hr />
      </SubTitle>
      <Row>
        <div className="col-md-4 mb-5 ">
          <iframe
            title="Resumo da produção de kits"
            width="100%"
            height="400px"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubhtml?gid=1536242094&amp;single=true&amp;widget=true&amp;headers=false"
          />
        </div>
        <div className="col-md-8 mb-5 ">
          <iframe
            title="Resumo gráfico da produção de kits"
            width="100%"
            height="400px"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubchart?oid=1354884143&amp;format=interactive"
          />
        </div>
      </Row>
    </>
  );
}
