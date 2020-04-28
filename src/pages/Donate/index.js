import React from 'react';
import Header from '../../components/Header';
import { Title, Button, A } from './styles';
import Bank from './Bank';
import Vakinha from './img/logo-vakinha.png';

export default function Donate() {
  return (
    <div>
      <Header headerTitle="Contribua com o Projeto!" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5 ">
            <Title>
              <h2>Sobre a campanha</h2>
              <hr />
            </Title>

            <p className="text-justify">
              O hipeerLab é um laboratório multidisciplinar descentralizado,
              formado por engenheiros, artistas e estudantes residentes em
              Florianópolis-SC. Formamos uma organização dinâmica e
              colaborativa, onde cada membro e cada parceiro coloca à disposição
              do grupo as ferramentas que possui conforme a necessidade do
              momento e a disponibilidade de cada um.
            </p>

            <p className="text-justify">
              Em função da pandemia COVID-19 temos nos dedicado a fabricar e
              doar os principais itens que o sistema de saúde necessita no
              momento: face shields e respiradores.
            </p>

            <p className="text-justify">
              Para fazer as face shields, utilizamos impressoras 3D. Já
              fabricamos e doamos mais de 600 face shields para instituições de
              saúde e outras entidades e profissionais cuja atuação gera risco
              de contaminação (dentistas, bombeiros, policiais, agentes de
              limpeza urbana e enfermeiros).
            </p>

            <p className="text-justify">
              Os respiradores estão sendo produzidos com base no modelo aberto
              denominado{' '}
              <A href="https://www.oxygen.protofy.xyz/">OxyGEN Project</A>{' '}
              desenvolvido por um grupo de profissionais liderados pela empresa
              espanhola <A href="https://www.protofy.xyz/">Protofy.xyz</A>.
            </p>

            <p className="text-justify">
              Estamos adaptando o projeto para construção de um protótipo com
              componentes nacionais e buscando parceiros de fabricação.
            </p>
            <p className="text-justify">
              Sua doação nos ajuda a custear a aquisição dos materiais
              necessários para a fabricação das máscaras para que os
              profissionais de saúde continuem salvando vidas e para o
              desenvolvimento dos protótipos dos respiradores para fabricação em
              escala.{' '}
            </p>
          </div>

          <div className="col-md-4 mb-5">
            <Title>
              <h2>Como contribuir</h2>
              <hr />
            </Title>
            <p className="text-justify">
              Faça uma doação através{' '}
              <A href="http://vaka.me/1015856">desta vakinha</A> ou utilize os
              dados bancários disponíveis abaixo.
            </p>
            <Button>
              <A href="http://vaka.me/1015856">
                Página da Vakinha <img src={Vakinha} alt="" />
              </A>
            </Button>
            <br />
            <br />
            <Title>
              <h2>Dados bancários</h2>
              <hr />
            </Title>

            <Bank />
            <hr />

            <Button>
              <a href="/transparencia">Prestação de Contas &raquo;</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
