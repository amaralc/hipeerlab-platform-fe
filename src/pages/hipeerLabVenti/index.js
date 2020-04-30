import React from 'react';
import Header from '../../components/Header';
import { Title } from './styles';
import VentilatorCard from './VentilatorCard';
import Ventilator2 from './img/update-2.png';
import Ventilator1 from './img/update-1.png';

export default function hipeerLabVenti() {
  return (
    <div>
      <Header headerTitle="Respirador hipeerLab" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5 ">
            <Title>
              <h2>Sobre o projeto</h2>
              <hr />
            </Title>
            <p className="text-justify">
              Nosso objetivo é construir um produto de baixo custo, atendendo as normas da ANVISA para o
              auxílio no tratamento de COVID-19. A construção é baseada em partes e peças facilmente encontradas
              no mercado brasileiro.
            </p>
          </div>
          <div className="col-md-12 mb-3">
            <Title>
              <h2>Updates</h2>
              <hr />
            </Title>
          </div>
          <div className="col-md-12 py-9 mb-3">
            <VentilatorCard
              title="07/04/2020"
              status="Segundo projeto. Baseado no conceito do respirador OxyGEN."
              imgPath={Ventilator2}
            />
          </div>
          <div className="col-md-12 py-3 mb-3">
            <VentilatorCard
              title="28/03/2020"
              status="Primeiro projeto."
              imgPath={Ventilator1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
