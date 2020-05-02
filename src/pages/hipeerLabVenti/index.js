import React from 'react';
import Header from '../../components/Header';
import { Title } from './styles';
import VentilatorCard from './VentilatorCard';
import Update0 from './img/update-0.png';
import Update1 from './img/update-1.png';
import Update2 from './img/update-2.png';

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
              Nosso objetivo é construir um produto de baixo custo, atendendo as
              normas da ANVISA para o auxílio no tratamento de COVID-19. A
              construção é baseada em partes e peças facilmente encontradas no
              mercado brasileiro.
            </p>
          </div>
          <div className="col-md-12 mb-3">
            <Title>
              <h2>Updates</h2>
              <hr />
            </Title>
          </div>
          <VentilatorCard
            date="07/04/2020"
            title="Adoção do projeto OxyGEN"
            description="Segundo projeto. Baseado no conceito do respirador OxyGEN."
            imgPath={Update2}
          />

          <VentilatorCard
            date="28/03/2020"
            title="Modelagem de conceito com came e cinto"
            description="Desenvolvimento de modelo de automatizador de ambu baseado
              em rotação contínua de um came que traciona cinto atravez de sistema de
              rolos móveis."
            imgPath={Update1}
          />
          <VentilatorCard
            date="23/03/2020"
            title="Rascunho do primeiro conceito"
            description="Desenvolvimento de modelo utilizando dreno de sucção como
            alternativa em situação de escassez de ambu bag."
            imgPath={Update0}
          />
        </div>
      </div>
    </div>
  );
}
