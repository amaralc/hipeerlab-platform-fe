import React from 'react';
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
import projectApolloBVM from './img/project-apollo-bvm-croped.png';
import projectInspire from './img/project-inspire-croped.png';
import projectAAU from './img/project-aau-pandemic-ventilator-croped.png';
import projectPrevailNY from './img/project-prevail-ny-croped.png';
import projectOpenBreath from './img/project-open-breath-croped.png';
import projectVentCore from './img/project-vent-core-croped.png';

const data = [
  {
    title: 'Fablab Joinville',
    location: 'Joinville, Brasil',
    updatedAt: '23/03/2020',
    status: 'Validação de protótipo',
    imgPath: projectJoinville,
    url: 'https://www.fablabjoinville.com.br/covid19/',
  },
  {
    title: 'OpenVentilator',
    location: 'São Paulo, Brasil',
    updatedAt: '09/05/2020',
    status: 'Protótipo pronto',
    imgPath: projectOpenVentilator,
    url: 'https://www.popsolutions.co/en_US/openventilator',
  },
  {
    title: 'Breath4Life',
    location: 'Florianópolis, Brasil',
    updatedAt: '07/05/2020',
    status: 'Protótipo pronto',
    imgPath: projectBreathe4Life,
    url: 'https://breath4lifeproject.com/',
  },
  {
    title: 'OxyGEN Project',
    location: 'Barcelona, Espanha',
    updatedAt: '14/04/2020',
    status: 'Em operação',
    imgPath: projectOxygen,
    url: 'https://www.oxygen.protofy.xyz/',
  },
  {
    title: 'MIT E-vent',
    location: 'Cambridge, EUA',
    updatedAt: '03/05/2020',
    status: 'Protótipo pronto',
    imgPath: projectMitEVent,
    url: 'https://e-vent.mit.edu/',
  },
  {
    title: 'Ventilaid',
    location: 'Cracóvia, Polônia',
    updatedAt: '12/05/2020',
    status: 'Protótipo pronto',
    imgPath: projectVentilaid,
    url: 'https://www.ventilaid.org/',
  },
  {
    title: 'Open Source Ventilator',
    location: 'Dublin, Irlanda',
    updatedAt: '15/04/2020',
    status: 'Validação de protótipo',
    imgPath: projectOpenSourceVentilator,
    url: 'https://opensourceventilator.ie/',
  },
  {
    title: 'OxVent',
    location: 'Londres, Reino Unido',
    updatedAt: '29/04/2020',
    status: 'Protótipo pronto',
    imgPath: projectOxVent,
    url: 'https://oxvent.org/',
  },
  {
    title: 'OpenVent-Bristol',
    location: 'Bristol, Reino Unido',
    updatedAt: '13/05/2020',
    status: 'Protótipo pronto',
    imgPath: projectOpenVent,
    url: 'https://openventbristol.co.uk/',
  },
  {
    title: 'AmboVent',
    location: 'Israel',
    updatedAt: '28/04/2020',
    status: 'Protótipo pronto',
    imgPath: projectAmboVent,
    url:
      'https://members.smoove.io//view.ashx?message=h44811613O122349105O219654O122419175&r=1009',
  },
  {
    title: 'VentilatorPAL',
    location: 'Nimegue, Holanda',
    updatedAt: '18/04/2020',
    status: 'Protótipo pronto',
    imgPath: projectVentilatorPal,
    url: 'https://freebreathing.org/',
  },
  {
    title: 'RespiraWorks',
    location: 'EUA',
    updatedAt: '18/05/2020',
    status: 'Em fase de projeto',
    imgPath: projectRespiraWorks,
    url: 'https://respira.works/',
  },
  {
    title: 'Projeto OpenAir',
    location: 'Lisboa, Portugal',
    updatedAt: '01/04/2020',
    status: 'Em fase de projeto',
    imgPath: projectOpenAir,
    url: 'https://projectopenair.org/pt/open-source-ventilator/',
  },
  {
    title: 'ApolloBVM',
    location: 'Houston, EUA',
    updatedAt: '19/04/2020',
    status: 'Protótipo pronto',
    imgPath: projectApolloBVM,
    url: 'http://oedk.rice.edu/apollobvm/',
  },
  {
    title: 'Inspire',
    location: 'São Paulo, Brasil',
    updatedAt: '07/05/2020',
    status: 'Protótipo pronto',
    imgPath: projectInspire,
    url: 'https://www.poli.usp.br/inspire',
  },
  {
    title: 'AAU Pandemic Ventilator',
    location: 'Aalborg, Dinamarca',
    updatedAt: '06/05/2020',
    status: 'Protótipo pronto',
    imgPath: projectAAU,
    url: 'https://corescue.org',
  },
  {
    title: 'Prevail NY',
    location: 'Syracuse, EUA',
    updatedAt: '09/04/2020',
    status: 'Protótipo pronto',
    imgPath: projectPrevailNY,
    url: 'https://jmawireless.com/prevail-ny/',
  },
  {
    title: 'Open Breath',
    location: 'Turim, Itália',
    updatedAt: '29/04/2020',
    status: 'Protótipo pronto',
    imgPath: projectOpenBreath,
    url: 'https://www.openbreath.it/en/#',
  },
  {
    title: 'VentCore',
    location: 'Pristina, Kosovo',
    updatedAt: '07/04/2020',
    status: 'Protótipo pronto',
    imgPath: projectVentCore,
    url: 'https://www.ventcore.health/',
  },
  {
    title: 'Virgin Orbit Ventilator',
    location: 'Long Beach, EUA',
    updatedAt: '30/03/2020',
    status: 'Protótipo pronto',
    imgPath: projectVentCore,
    url: 'https://www.ventcore.health/',
  },
];

export default function ListData() {
  return data.map((data) => (
    <div className="col-md-3 py-3 mb-3">
      <Card
        title={data.title}
        location={data.location}
        updatedAt={data.updatedAt}
        status={data.status}
        imgPath={data.imgPath}
        url={data.url}
        button="Ver Projeto"
      />
    </div>
  ));
}
