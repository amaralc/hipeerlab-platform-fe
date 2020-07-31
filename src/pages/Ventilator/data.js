import React from 'react';
import VentilatorCard from '../../components/CardHorizontal';

const data = [
  {
    date: "29/04/2020",
    title: "Usinagem de contrapeso metálico",
    description: "Para forçar o retorno da alavanca sem realizar outras furações nas peças em acrílico, um contrapeso com maior massa foi usinado a partir de tarugo metálico no Laboratório de Mecânica de Precisão. Com essa modificação, os rolamentos passaram a manter contato com o came durante rolagem em todo o seu perímetro",
    imgPath: './img/update-20200429.png'
  },
  {
    date: "17/04/2020",
    title: "Colagem das placas de acrílico",
    description: "As placas de acrílico foram unidas usando clorofórmio com a ajuda de recursos do Laboratório de Mecânica de Precisão e do Laboratório de Design e Usabilidade da UFSC.Após a colagem a estrutura se manteve rígida e pronta para realização de ensaios.",
    imgPath: './img/update-20200417.png'
  },
  {
   date: "15/04/2020",
   title: "Montagem do primeiro protótipo em acrílico (OxyGEN M V5)",
   description: "Os componentes são levados para montagem com apoio das instalações do Laboratório de Mecânica de Precisão (LMP) da UFSC. A montagem deixa claro que será necessário fixar as partes com resina ou outro tipo de fixação antes da realização de qualquer ensaio.",
   imgPath: "./img/update-20200415.png"
  }
];

const listData = data.map(data => (
  <VentilatorCard
    date={data.date}
    title={data.title}
    description={data.description}
    imgPath={data.imgPath}
  />
));

export default listData
