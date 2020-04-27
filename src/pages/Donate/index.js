import React from 'react';
import Header from '../../components/Header';
import { Title, Button } from './styles';

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
              <a href="https://www.oxygen.protofy.xyz/">OxyGEN Project</a>{' '}
              desenvolvido por um grupo de profissionais liderados pela empresa
              espanhola <a href="https://www.protofy.xyz/">Protofy.xyz</a>.
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

            <Button>
              <a href="/transparencia">Prestação de Contas &raquo;</a>
            </Button>
          </div>

          <div className="col-md-4 mb-5">
            <Title>
              <h2>Dados bancários</h2>
              <hr />
            </Title>
            <address>
              <strong>Titular:</strong> Rafael Gomes Nunes Silva
              <br />
              <strong>Banco:</strong> Banco do Brasil (Código: 001)
              <br />
              <strong>Agência:</strong> 1453-2
              <br />
              <strong>Conta corrente:</strong> 60818-1
              <br />
              <br />
              Entre em contato caso precise do nº do CPF:
              <br />
              <abbr title="Phone">
                <strong>WhatsApp:</strong>
              </abbr>
              +55 (48) 99800-6530
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
