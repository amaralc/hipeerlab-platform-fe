import React from 'react';
import Header from '../../components/Header';
import { Title } from './styles';
import VentilatorCard from '../../components/CardHorizontal';

import Update20200323 from './img/update-20200323.png';
import Update20200328 from './img/update-20200328.png';
import Update20200407 from './img/update-20200407.png';
import Update20200412 from './img/update-20200412.png';
import Update20200413 from './img/update-20200413.png';
import Update20200415 from './img/update-20200415.png';
import Update20200417 from './img/update-20200417.png';
import Update20200429 from './img/update-20200429.png';

export default function hipeerLabVenti() {
  return (
    <div>
      <Header
        headerTitle="Respirador hipeerLab"
        headerText="Nosso objetivo é construir um produto de baixo custo, atendendo as
              normas da ANVISA para o auxílio no tratamento de COVID-19. A
              construção é baseada em partes e peças facilmente encontradas no
              mercado brasileiro."
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-3">
            <Title>
              <h2>Updates</h2>
              <hr />
            </Title>
          </div>
          <VentilatorCard
            date="29/04/2020"
            title="Usinagem de contrapeso metálico"
            description="Para forçar o retorno da alavanca sem realizar outras
            furações nas peças em acrílico, um contrapeso com maior massa foi
            usinado a partir de tarugo metálico no Laboratório de Mecânica de
            Precisão. Com essa modificação, os rolamentos passaram a
            manter contato com o came durante rolagem em todo o seu perímetro"
            imgPath={Update20200429}
          />
          <VentilatorCard
            date="17/04/2020"
            title="Colagem das placas de acrílico"
            description="As placas de acrílico foram unidas usando clorofórmio com
            a ajuda de recursos do Laboratório de Mecânica de Precisão e do Laboratório
            de Design e Usabilidade da UFSC. Após a colagem a estrutura se manteve
            rígida e pronta para realização de ensaios."
            imgPath={Update20200417}
          />
          <VentilatorCard
            date="15/04/2020"
            title="Montagem do primeiro protótipo em acrílico (OxyGEN M V5)"
            description="Os componentes são levados para montagem com apoio das
            instalações do Laboratório de Mecânica de Precisão (LMP) da UFSC. A
            montagem deixa claro que será necessário fixar as partes com resina
            ou outro tipo de fixação antes da realização de qualquer ensaio."
            imgPath={Update20200415}
          />
          <VentilatorCard
            date="13/04/2020"
            title="Corte a laser das chapas de acrílico"
            description="As chapas de acrílico do protótipo experimental
            OxyGEN M V5, adaptado pela equipe hipeerLab, são fabricadas por corte
            a laser no Núcleo de Gestão e Design - Laboratório de Design e Usabilidade
            da UFSC."
            imgPath={Update20200413}
          />
          <VentilatorCard
            date="12/04/2020"
            title="Adaptação do projeto Oxygen para transmissão direta"
            description="Eliminação da transmissão por engrenagens e adaptação de
            flange formada por anéis de acrílico. A opção reduz a complexidade
            de montagem do protótipo e se assemelha ao conceito IP."
            imgPath={Update20200412}
          />
          <VentilatorCard
            date="07/04/2020"
            title="Adoção do projeto OxyGEN"
            description="Após avaliar e comparar outros projetos de grupos do
            Brasil e do mundo, optamos por adotar o projeto OxyGEN, da equipe
            Protofy, de Barcelona na Espanha. O projeto é um dos mais bem
            documentados dentre os projetos abertos (open-source) e faz uso
            de poucos componentes eletrônicos, assim como de sistema de acionamento
            com componentes altamente disponíveis no mercado brasileiro."
            imgPath={Update20200407}
          />
          <VentilatorCard
            date="28/03/2020"
            title="Modelagem de conceito com came e cinto"
            description="Desenvolvimento de modelo de automatizador de ambu baseado
              em rotação contínua de um came que traciona cinto atravez de sistema de
              rolos móveis."
            imgPath={Update20200328}
          />
          <VentilatorCard
            date="23/03/2020"
            title="Esboço do primeiro conceito"
            description="Desenvolvimento de modelo utilizando dreno de sucção como
            alternativa em situação de escassez de ambu bag."
            imgPath={Update20200323}
          />
        </div>
      </div>
    </div>
  );
}
