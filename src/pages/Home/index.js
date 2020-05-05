import React from 'react';
import Card from '../../components/Card';
import Ventilator from '../Ventilator/img/project-hipeerlab-v3-300x200px.png';
import FaceShield from '../../img/prusaFaceShield.png';
import Donation from './img/contribua.png';

import { Title, Row, ButtonDemanda } from './styles';

import PartnersContent from './Partner';

import Header from '../../components/Header';

export default function Home() {
  return (
    <div>
      {/* inclui o header nos moldes das paginas de conteudo */}
      <Header
        headerTitle="Iniciativa COVID-19"
        headerText="Nos reunimos para auxiliar no combate à propagação da COVID-19.
          No momento estamos projetando e fabricando um respirador mecânico de baixo
          custo, assim como fabricando e doando face shields."
      />
      <div className="container">
        <Row>
          <div className="col-md-8 mb-3">
            <Title>
              <h2>Quem somos</h2>
            </Title>
            <hr />
            <p>
              Somos um laboratório distribuído. Cada parte dos recursos que
              contribui com o hipeerLab se encontra nas casas de indivíduos e
              instituições que se complementam de forma colaborativa. Formamos
              uma organização dinâmica, que se expande e se contrai adaptando-se
              às circunstâncias.
            </p>
            <p>
              Até o momento nos adaptamos para fabricar e doar mais de 600 face
              shields para profissionais de saúde e outros em situação de
              vulnerabilidade. Nosso desafio do momento é validar o projeto de
              respirador mecânico que pode ajudar a salvar vidas.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <Title>
              <h2>Contato</h2>
            </Title>
            <hr />
            <address>
              <p>
                <strong>hipeerLab</strong>
              </p>
              <p>Florianópolis, SC</p>
            </address>
            <address>
              <span title="Instagram">Instagram:</span>
              <a href="https://www.instagram.com/hipeerlab/"> @hipeerlab</a>
            </address>

            <ButtonDemanda>
              <a href="https://forms.gle/y7s7m8R6MmRYZJk89">
                Cadastrar demanda &raquo;
              </a>
            </ButtonDemanda>
          </div>
        </Row>
        <Row>
          <div className="col-md-4 py-3 mb-3">
            <Card
              title="Ajude essa causa!"
              text="As doações que recebemos nos ajudam a custear
                a fabricação e doação de face shields, assim como o projeto
                e fabricação de respiradores mecânicos."
              location=""
              updatedAt=""
              status=""
              imgPath={Donation}
              url="/contribua"
              button="Contribua &raquo;"
            />
          </div>
          <div className="col-md-4 py-3 mb-3">
            <Card
              title="Respiradores Mecânicos"
              text="Veja os projetos de respiradores que listamos e que
                estamos utilizado como referências para projetar e fabricar
                o nosso."
              location=""
              updatedAt=""
              status=""
              imgPath={Ventilator}
              url="/respiradores"
              button="Ver Projetos &raquo;"
            />
          </div>
          <div className="col-md-4 py-3 mb-3">
            <Card
              title="Face Shields e Outros"
              text="Veja a lista de grupos que também estão produzindo face shields
                e outros suprimentos para ajudar no combate à COVID-19 no Brasil
                e no mundo."
              location=""
              updatedAt=""
              status=""
              imgPath={FaceShield}
              url="/suprimentos"
              button="Ver Projetos &raquo;"
            />
          </div>
        </Row>
        <Row>
          <div className="col-md-12 mb-3">
            <PartnersContent />
          </div>
        </Row>
      </div>
    </div>
  );
}
