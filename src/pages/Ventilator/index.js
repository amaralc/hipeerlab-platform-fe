import React from 'react';
import { Title, Row } from './styles';

import Card from '../../components/Card';
import projectJoinville from './img/project-fablab-croped.png';
import projectOxygen from './img/project-oxygen-croped.png';
import projectOpenVentilator from './img/project-open-ventilator-v2-croped.png';
import projectOpenSourceVentilator from './img/project-open-source-ventilator-croped.png';
import projecthipeerLab from './img/project-hipeerlab-v3-croped.png';
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

import Header from '../../components/Header';

export default function Ventilator() {
  return (
    <div>
      {/* inclui o header nos moldes das paginas de conteudo */}
      <Header
        headerTitle="Projetos de Respiradores Mecânicos"
        headerText="Lista de projetos de respiradores mecânicos de baixo custo
        para utilização em hospitais no combate à COVID-19."
      />
      <div className="container">
        <Title>
          <h2>Equipe hipeerLab</h2>
          <hr />
        </Title>
        <Row>
          <div className="col-md-9 py-3 mb-3">
            <iframe
              title="Meu video"
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/I5RhkEoho9c"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="Equipe hipeerLab"
              location="Florianópolis, Brasil"
              updatedAt="15/04/2020"
              status="Protótipo OxyGEN-M pronto"
              imgPath={projecthipeerLab}
              url="/respiradores-hipeerlab"
              button="Ver Projeto"
            />
          </div>
        </Row>
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
              updatedAt="14/04/2020"
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
              updatedAt="09/04/2020"
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
              updatedAt="14/04/2020"
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
              updatedAt="10/04/2020"
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
              updatedAt="12/04/2020"
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
              updatedAt="01/04/2020"
              status="Protótipo pronto"
              imgPath={projectOpenVent}
              url="https://www.instructables.com/id/COVID-19-Rapid-Manufacture-Ventilator-BVM-Ambubag-/"
              button="Ver Projeto"
            />
          </div>
          <div className="col-md-3 py-3 mb-3">
            <Card
              title="AmboVent"
              location="Israel"
              updatedAt="14/04/2020"
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
              updatedAt="10/04/2020"
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
              updatedAt="15/04/2020"
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
              url="https://www.projectopenair.org/open-source-ventilator.php"
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
              url="https://virginorbit.com/virgin-orbit-uci-and-ut-austin-
                design-new-mass-producible-ventilator-for-covid-19-patients/"
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
              updatedAt="09/04/2020"
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
              updatedAt="08/04/2020"
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
              updatedAt="03/04/2020"
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
              updatedAt="03/04/2020"
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
