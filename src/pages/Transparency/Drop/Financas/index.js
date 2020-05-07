import React from 'react';
import { SubTitle, Row } from '../styles';

export default function Financas() {
  return (
    <>
      <SubTitle>
        <p>Resumo</p>
        <hr />
      </SubTitle>
      <Row>
        <div className="col-md-4 mb-5 ">
          <iframe
            title="Resumo financeiro"
            width="100%"
            height="400px"
            className="text-center"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubhtml?gid=928021458&amp;single=true&amp;widget=true&amp;headers=false"
          />
        </div>
        <div className="col-md-8 mb-5 ">
          <iframe
            title="Resumo financeiro gráfico"
            width="100%"
            height="400px"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubchart?oid=166581470&amp;format=interactive"
          />
        </div>
      </Row>
      <SubTitle>
        <p>Detalhes</p>
        <hr />
      </SubTitle>
      <Row>
        <div className="col-md-12 mb-5 ">
          <iframe
            title="Detalhes financeiros"
            width="100%"
            height="400px"
            className="text-center"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubhtml?gid=688914183&amp;single=true&amp;widget=true&amp;headers=false"
          />
        </div>
      </Row>
    </>
  );
}
