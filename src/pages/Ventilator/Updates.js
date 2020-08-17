import React from 'react';
import VentilatorCard from '../../components/CardHorizontal';

import Update20200429 from './img/update-20200429.png';
import Update20200417 from './img/update-20200417.png';
import Update20200415 from './img/update-20200415.png';
import Update20200323 from './img/update-20200323.png';
import Update20200328 from './img/update-20200328.png';
import Update20200407 from './img/update-20200407.png';
import Update20200412 from './img/update-20200412.png';
import Update20200413 from './img/update-20200413.png';
import Update20200502 from './img/update-20200502.png';
import Update20200509 from './img/update-20200509.png';
import Update20200509_1 from './img/update-20200509_1.png';
import Update20200523 from './img/update-20200523.png';
import Update20200530 from './img/update-20200530.png';
import Update20200530_1 from './img/update-20200530_1.png';
import Update20200606 from './img/update-20200606.png';
import Update20200606_1 from './img/update-20200606_1.png';
import Update20200613 from './img/update-20200613.png';
import Update20200613_1 from './img/update-20200613_1.png';
import Update20200627 from './img/update-20200627.png';
import Update20200627_1 from './img/update-20200627_1.png';
import Update20200704 from './img/update-20200704.png';
import Update20200711 from './img/update-20200711.png';
import Update20200711_1 from './img/update-20200711_1.png';
import Update20200715 from './img/update-20200715.png';
import Update20200720 from './img/update-20200720.png';
import Update20200817 from './img/update-20200817.png';

const data = [
  {
    date: '20/07/2020',
    title: 'Montagem final do protótipo OxyGEN IP hipeerLab',
    description:
      'Versão final do automatizador de ressuscitador manual do tipo AMBU, projeto nacionalizado a partir do projeto Espanhol. Esta etapa marca o fim da participação do grupo hipeerLab dentro do projeto de respiradores.',
    imgPath: Update20200817,
  },
  {
    date: '20/07/2020',
    title: 'Ensaio de vida',
    description:
      'Para evidenciar a existência de erros no protótipo montado, foi iniciado no dia 20/jul, às 8:45, o ensaio de vida do equipamento. O sistema foi acionado, com baixa rotação (o suficiente para gerar um ciclo de respiração de 6 s). Após 12 horas, o ensaio foi interrompido devido a alguns erros que foram observados e registrados.',
    imgPath: Update20200720,
  },
  {
    date: '15/07/2020',
    title: 'Conclusão e instalação do circuito LED',
    description:
      'Foi instalado o circuito LED para alarmes visuais, em substituição à torre de sinalização. Um case foi projetado e fabricado via impressão 3D (manufatura aditiva). Com isso, o circuito LED foi isolado da fiação do motor e garantiu organização e isolamento do sistema.',
    imgPath: Update20200715,
  },
  {
    date: '11/07/2020',
    title: 'Elaboração de FMEA do produto',
    description:
      'Com o montagem do protótipo, em sua versão 1, concluida, foi iniciada a elaboração de uma planilha de Análise dos Modos de falhas e Efeitos (FMEA) do protótipo OxyGEN, conforme informações já geradas na equipe da Espanha (projeto original) e equipes brasileiras.',
    imgPath: Update20200711_1,
  },
  {
    date: '11/07/2020',
    title: 'Código em Python para elaboração dos cames',
    description:
      'Com a necessidade de atendimento de diversos modelos de cames (cada came atende a um volume e relação de expiração/inspiração especifica (i:e)), viu-se a necessidade de traduzir para uma linguagem aberta (python) o código original gerado em Matlab pela equipe espanhola.',
    imgPath: Update20200711,
  },
  {
    date: '04/07/2020',
    title: 'Elaboração e fabricação do circuito LED',
    description:
      'Projeto do circuito, que prevê identificação de interrupção da rotação (através da ligação do LED vermelho) ou funcionamento normal (acionamento do LED verde). A fabricação do mesmo foi realizada em parceria com o LMP, no equipamento de laser de baixa potência (SL2).',
    imgPath: Update20200704,
  },
  {
    date: '27/06/2020',
    title: 'Elaboração e projeto de novo circuito LED',
    description:
      'O projeto inicial contemplava a utilização de uma torre de sinalização LED, mas que não justifica os valores excessivos. A fim de evitar maiores custos, a torre será substituída por um conjunto de 3 LEDs (verde, amarelo e vermemlho), além de ser elaborado um novo circuito para abranger novas funcionalidades.',
    imgPath: Update20200627_1,
  },
  {
    date: '27/06/2020',
    title: 'Correção e adaptação do projeto mecânico',
    description:
      'Montagem do componente segue com diversos pequenos problemas, entre eles ressaltos no came devido ao corte a laser. O retorno da montagem do projeto permite ajustes no modelo 3D para que os futuros protótipos não sofram com tais erros.',
    imgPath: Update20200627,
  },
  {
    date: '13/06/2020',
    title: 'Continuação da montagem',
    description:
      'Montagem do modelo em aço inoxidável segue conforme a disponibilidade e fabricação dos componentes em parceria com o LMP. Algumas adaptações aos componentes foram realizadas em função das diferenças dimensionais e de posição encontradas entre o modelo CAD 2D enviado à empresa e as chapas já dobradas.',
    imgPath: Update20200613_1,
  },
  {
    date: '13/06/2020',
    title: 'Adaptação e correção do protótipo',
    description:
      'Com as diferenças de fabricação e do projeto mecânico 3D observadas, optou-se por registrar as diferenças atuais do projeto, alterar alguns componentes no modelo real e implementar estas alterações no projeto 3D.',
    imgPath: Update20200613,
  },
  {
    date: '06/06/2020',
    title: 'Inicio da montagem do projeto OxyGEN versão inox',
    description:
      'Com as chapas metálicas adquiridas em empresa terceirizada e a fabricação dos primeiros componentes usinados dentro do Laboratório de Mecânica de Precisão finalizado, foi iniciado a montagem dos protótipo da versão IP, em aço inoxidável.',
    imgPath: Update20200606,
  },
  {
    date: '06/06/2020',
    title: 'Visita a possível empresa parceira para fabricação',
    description:
      'De forma a facilitar o longo processo de homologação, buscou-se entre as empresas de fabricação e montagem de equipamentos médicos, parceiros interessados no projeto OxyGEN. Foi realizada uma visita ao possível parceiro, em São José, para avaliar se haveria possibilidade de parceria.',
    imgPath: Update20200606_1,
  },
  {
    date: '30/05/2020',
    title: 'Projeto detalhado v1.2.1.534',
    description:
      'Projeto mecânico do equipamento OxyGEN, modelo IP, em sua versão 1.2.1.534, foi liberado para o público. Todos os componentes, estão especificados na lista de materiais, que pode ser acessada pela plataforma Onshape no link disponível.',
    imgPath: Update20200530_1,
  },
  {
    date: '30/05/2020',
    title: 'Placa de controle de rotação do came',
    description:
      'Com as variações observadas na velocidade de rotação do came, em função da compressão do AMBU, buscou-se alternativas. Optou-se por desenvolver, fabricar e montar um circuito elétrico simples que adicionará ganho de sempre que a corrente do sistema estiver abaixo de um determinado nível, mantendo o sistema dentro de um patamar estável.',
    imgPath: Update20200530,
  },
  {
    date: '23/05/2020',
    title: 'Adaptação do projeto mecânico',
    description:
      'Com a aquisição dos componentes conforme o projeto original (Espanhol), o projeto base adquirido com os parceiros brasileiros (do grupo Voluntários OxyGEN) teve de ser alterado. As alterações foram feitas e os desenhos foram liberados para a fabricação no LMP e em terceiros.',
    imgPath: Update20200523,
  },
  {
    date: '09/05/2020',
    title: 'Remodelagem do projeto OxyGEN versão IP',
    description:
      'Com a versão em acrílico finalizada, o próximo passo foi o de iniciar a remodelagem completa dos componentes da versão industrial em aço inoxidável na plataforma Onshape, devido à necessidade de flexibilização e adaptação do projeto , além de facilitar o acesso ao projeto mecânico de forma aberta.',
    imgPath: Update20200509_1,
  },
  {
    date: '09/05/2020',
    title: 'Submissão de proposta para Edital FAPESC Coronavirus nº 6/2020',
    description:
      'Outra ação para a pleito de verbas para expansão das atividades do hipeerLab em relação ao projeto OxyGEN. Foram considerados nesse projeto, em parceria ao Laboratório de Mecânica de Precisão (LMP) da UFSC, a aquisição de verbas para fabricação e montagem de 15 equipamentos do modelo inox, a serem doados a rede pública hospitalar ao fim do projeto.',
    imgPath: Update20200509,
  },
  {
    date: '02/05/2020',
    title: 'Edital FERA',
    description:
      'De modo a abranger um público maior e estender as capacidades produtivas do grupo hipeerLab, o grupo do projeto mecânico optou por elaborar e submeter um breve projeto ao edital FERA, promovido pela FIESC. Junto a esta submissão, nasceu o vídeo de divulgação das atividades do hipeerLab.',
    imgPath: Update20200502,
  },
  {
    date: '29/04/2020',
    title: 'Usinagem de contrapeso metálico',
    description:
      'Para forçar o retorno da alavanca sem realizar outras furações nas peças em acrílico, um contrapeso com maior massa foi usinado a partir de tarugo metálico no Laboratório de Mecânica de Precisão. Com essa modificação, os rolamentos passaram a manter contato com o came durante rolagem em todo o seu perímetro',
    imgPath: Update20200429,
  },
  {
    date: '17/04/2020',
    title: 'Colagem das placas de acrílico',
    description:
      'As placas de acrílico foram unidas usando clorofórmio com a ajuda de recursos do Laboratório de Mecânica de Precisão e do Laboratório de Design e Usabilidade da UFSC.Após a colagem a estrutura se manteve rígida e pronta para realização de ensaios.',
    imgPath: Update20200417,
  },
  {
    date: '15/04/2020',
    title: 'Montagem do primeiro protótipo em acrílico (OxyGEN M V5)',
    description:
      'Os componentes são levados para montagem com apoio das instalações do Laboratório de Mecânica de Precisão (LMP) da UFSC. A montagem deixa claro que será necessário fixar as partes com resina ou outro tipo de fixação antes da realização de qualquer ensaio.',
    imgPath: Update20200415,
  },
  {
    date: '13/04/2020',
    title: 'Corte a laser das chapas de acrílico',
    description:
      'As chapas de acrílico do protótipo experimental OxyGEN M V5, adaptado pela equipe hipeerLab, são fabricadas por corte a laser no Núcleo de Gestão e Design - Laboratório de Design e Usabilidade da UFSC.',
    imgPath: Update20200413,
  },
  {
    date: '12/04/2020',
    title: 'Adaptação do projeto Oxygen para transmissão direta',
    description:
      'Eliminação da transmissão por engrenagens e adaptação de flange formada por anéis de acrílico. A opção reduz a complexidade de montagem do protótipo e se assemelha ao conceito IP.',
    imgPath: Update20200412,
  },
  {
    date: '07/04/2020',
    title: 'Adoção do projeto OxyGEN',
    description:
      'Após avaliar e comparar outros projetos de grupos do Brasil e do mundo, optamos por adotar o projeto OxyGEN, da equipe Protofy, de Barcelona na Espanha. O projeto é um dos mais bem documentados dentre os projetos abertos (open-source) e faz uso de poucos componentes eletrônicos, assim como de sistema de acionamento com componentes altamente disponíveis no mercado brasileiro.',
    imgPath: Update20200407,
  },
  {
    date: '28/03/2020',
    title: 'Modelagem de conceito com came e cinto',
    description:
      'Desenvolvimento de modelo de automatizador de ambu baseado em rotação contínua de um came que traciona cinto através de sistema de rolos móveis.',
    imgPath: Update20200328,
  },
  {
    date: '23/03/2020',
    title: 'Esboço do primeiro conceito',
    description:
      'Desenvolvimento de modelo utilizando dreno de sucção como alternativa em situação de escassez de ambu bag.',
    imgPath: Update20200323,
  },
];

export default function ListData() {
  return data.map((data) => (
    <VentilatorCard
      date={data.date}
      title={data.title}
      description={data.description}
      imgPath={data.imgPath}
    />
  ));
}
