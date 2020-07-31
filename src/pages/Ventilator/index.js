import React from 'react';
import { Title, Row, Column } from './styles';

import Header from '../../components/Header';

import listData from './data.js';

import Card from '../../components/Card';
import projectJoinville from './img/project-fablab-croped.png';
import projectOxygen from './img/project-oxygen-croped.png';
import projectOpenVentilator from './img/project-open-ventilator-v2-croped.png';
import projectOpenSourceVentilator from './img/project-open-source-ventilator-croped.png';
import projectVentilaid from './img/project-ventilaid-croped.png';
import projectMitEVent from './img/project-mit-e-vent-croped.png';
import projectBreathe4Life from './img/project-breathe-4-life-croped.png';
import projectOxVent from './img/project-Ox-Vent-croped.png';
import projectOpenVent from './img/project-open-vent-bristol-croped.png';
import projectAmboVent from './img/project-ambo-vent-croped.png';
import projectVentilatorPal from './img/project-ventilator-pal-croped.png';
import projectRespiraWorks from './img/project-respira-works-croped.png';
import projectOpenAir from './img/project-open-air-croped.png';
import projectVirginOrbit from './img/project-virgin-orbit-croped.png';
import projectApolloBVM from './img/project-apollo-bvm-croped.png';
import projectInspire from './img/project-inspire-croped.png';
import projectAAU from './img/project-aau-pandemic-ventilator-croped.png';
import projectPrevailNY from './img/project-prevail-ny-croped.png';
import projectOpenBreath from './img/project-open-breath-croped.png';
import projectVentCore from './img/project-vent-core-croped.png';

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
          <div>
            {/* mostra a lista de tudo que foi feito no historico */}
            {listData}
          </div>
        </Column>
      </div>
      <div className="container">
        <Title>
          <h2>Referências</h2>
          <hr />
        </Title>
        <Row>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="Fablab Joinville"
              location="Joinville, Brasil"
              updatedAt="23/03/2020"
              status="Validação de protótipo"
              imgPath={projectJoinville}
              url="https://www.fablabjoinville.com.br/covid19/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="OpenVentilator"
              location="São Paulo, Brasil"
              updatedAt="09/05/2020"
              status="Protótipo pronto"
              imgPath={projectOpenVentilator}
              url="https://www.popsolutions.co/en_US/openventilator"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="Breath4Life"
              location="Florianópolis, Brasil"
              updatedAt="07/05/2020"
              status="Protótipo pronto"
              imgPath={projectBreathe4Life}
              url="https://breath4lifeproject.com/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="OxyGEN Project"
              location="Barcelona, Espanha"
              updatedAt="14/04/2020"
              status="Em operação"
              imgPath={projectOxygen}
              url="https://www.oxygen.protofy.xyz/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="MIT E-vent"
              location="Cambridge, EUA"
              updatedAt="03/05/2020"
              status="Protótipo pronto"
              imgPath={projectMitEVent}
              url="https://e-vent.mit.edu/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="Ventilaid"
              location="Cracóvia, Polônia"
              updatedAt="12/05/2020"
              status="Protótipo pronto"
              imgPath={projectVentilaid}
              url="https://www.ventilaid.org/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="Open Source Ventilator"
              location="Dublin, Irlanda"
              updatedAt="15/04/2020"
              status="Validação de protótipo"
              imgPath={projectOpenSourceVentilator}
              url="https://opensourceventilator.ie/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="OxVent"
              location="Londres, Reino Unido"
              updatedAt="29/04/2020"
              status="Protótipo pronto"
              imgPath={projectOxVent}
              url="https://oxvent.org/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="OpenVent-Bristol"
              location="Bristol, Reino Unido"
              updatedAt="13/05/2020"
              status="Protótipo pronto"
              imgPath={projectOpenVent}
              url="https://openventbristol.co.uk/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="AmboVent"
              location="Israel"
              updatedAt="28/04/2020"
              status="Protótipo pronto"
              imgPath={projectAmboVent}
              url="https://members.smoove.io//view.ashx?message=h44811613O122349105O219654O122419175&r=1009"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="VentilatorPAL"
              location="Nimegue, Holanda"
              updatedAt="18/04/2020"
              status="Protótipo pronto"
              imgPath={projectVentilatorPal}
              url="https://freebreathing.org/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="RespiraWorks"
              location="EUA"
              updatedAt="18/05/2020"
              status="Em fase de projeto"
              imgPath={projectRespiraWorks}
              url="https://respira.works/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="Projeto OpenAir"
              location="Lisboa, Portugal"
              updatedAt="01/04/2020"
              status="Em fase de projeto"
              imgPath={projectOpenAir}
              url="https://projectopenair.org/pt/open-source-ventilator/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="Virgin Orbit Ventilator"
              location="Long Beach, EUA"
              updatedAt="30/03/2020"
              status="Protótipo pronto"
              imgPath={projectVirginOrbit}
              url="https://virginorbit.com/virgin-orbit-uci-and-ut-austin-design-new-mass-producible-ventilator-for-covid-19-patients/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="ApolloBVM"
              location="Houston, EUA"
              updatedAt="19/04/2020"
              status="Protótipo pronto"
              imgPath={projectApolloBVM}
              url="http://oedk.rice.edu/apollobvm/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="Inspire"
              location="São Paulo, Brasil"
              updatedAt="07/05/2020"
              status="Protótipo pronto"
              imgPath={projectInspire}
              url="https://www.poli.usp.br/inspire"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="AAU Pandemic Ventilator"
              location="Aalborg, Dinamarca"
              updatedAt="06/05/2020"
              status="Protótipo pronto"
              imgPath={projectAAU}
              url="https://corescue.org"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="Prevail NY"
              location="Syracuse, EUA"
              updatedAt="09/04/2020"
              status="Protótipo pronto"
              imgPath={projectPrevailNY}
              url="https://jmawireless.com/prevail-ny/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="Open Breath"
              location="Turim, Itália"
              updatedAt="29/04/2020"
              status="Protótipo pronto"
              imgPath={projectOpenBreath}
              url="https://www.openbreath.it/en/#"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="VentCore"
              location="Pristina, Kosovo"
              updatedAt="07/04/2020"
              status="Protótipo pronto"
              imgPath={projectVentCore}
              url="https://www.ventcore.health/"
              button="Ver Projeto"
            />
          </div>
        </Row>
      </div>
    </div>
  );
}
