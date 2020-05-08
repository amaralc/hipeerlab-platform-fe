import React from 'react';
import { SubTitle, Row } from '../styles';

// import { Container } from './styles';

export default function Respirador() {
  return (
    <>
      <SubTitle>
        <p>Perguntas sobre o respirador mecânico hipeerLab</p>
        <hr />
      </SubTitle>
      <div>
        <div className="row">
          <div className="col-md-12 mb-5 ">
            <h5>
              Por que escolhemos um projeto de baixa tecnologia
              agregada?
            </h5>
            <h7>
              Nós escolhemos uma baixa tecnologia agregada para atender a demanda de emergência com
              três premissas:
                1. Ser fácil de construir sem elementos complexos ou altamente tecnológicos de baixa
                disponibilidade;
                2. Ser fácil de treinar, fácil de usar e fácil de consertar;
                3. Rápida produção em massa e a um custo unitário muito baixo (abaixo de 6 mil reais).
            </h7>
            <hr />

            <h5>
              Para quem é direcionado?
            </h5>
            <h7>
              Para qualquer profissional de saúde que trabalhe em situações extremas com baixa
              disponibilidade de ventiladores pulmonares e que precisa, como último recurso, de um
              dispositivo capaz de automatizar um ressuscitador manual do tipo AMBU, usualmente
              encontrado em ambulâncias. Este dispositivo pode ser construído em um período curto de
              tempo e possui uma elevada componentes de elevada disponibilidade no mercado. É um
              dispositivo desenvolvido para evitar situações de vida ou morte em triagem nas emergências
              hospitalares e não para substituir outros tipos superiores de respiradores profissionais e muito
              mais seguros.
            </h7>
            <hr />

            <h5>
              Quem pode construir um protótipo OxyGEN e quanto
              tempo demora?
            </h5>
            <h7>
              O Respirador OxyGEN é desenvolvido para ser montado em situações de emergência. Nenhum
              conhecimento especializado de engenharia é necessário para montá-lo. Você pode montá-lo
              em menos de um dia você mesmo. AS ferramentas necessárias podem ser encontradas aqui.
            </h7>
            <hr />

            <h5>OxyGEN substitui um ventilador pulmonar homologado?</h5>
            <h7>
              Não, este é um dispositivo de emergência. Ele não é uma solução para substituir ventiladores
              pulmonares profissionais. É uma solução de emergência para situações extremas, quando não
              houver outra opção.
            </h7>
            <hr />

            <h5>
              Como posso ajudar?
            </h5>
            <h7>
              OxyGEN é um projeto OPEN SOURCE e livre, você pode fazer ajuste ou adicionar novas ideias
              desde que mantenha-o aberto e livre para qualquer cidadão do mundo.
            </h7>
            <hr />

            <h5>Quem está por trás do OxyGEN?</h5>
            <h7>
              OxyGEN é um projeto colaborativo de hardware iniciado no conduzido pelo grupo Protofy na
              Espanha. Qualquer pessoa pode contribuir com ideias, planos ou conhecimento. Você pode
              contatá-los através do e-mail: oxygen@protofy.xyz.
            </h7>
            <hr />

            <h5>O que é o grupo Protofy?</h5>
            <h7>
              Protofy é uma companhia sediada em Barcelona que oferece suporte para inovação de
              hardware e software a companhias e departamentos de engenharia.
            </h7>
            <hr />

            <h5>O que inspira e motiva a Protofy?</h5>
            <h7>
              A vontade de contribuir com o conhecimento deles para aliviar os efeitos devastadores dessa
              crise de saúde que não tem precedentes há muitos anos. Esta pandemia pode conduzir a
              situações de falta parcial ou total de equipamentos médicos e suprimentos em alguns lugares
              (áreas rurais e países em desenvolvimento, por exemplo) caso a situação atual se agrave.
            </h7>
            {/*
          <hr />

          <h5></h5>
          <p></p>
          <hr />
          */}
          </div>
        </div>
      </div>
    </>
  );
}
