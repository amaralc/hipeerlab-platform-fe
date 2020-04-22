import React from "react";
import Header from "../../components/Header";
import { Title, Button } from "./styles";

export default class Donate extends React.Component {
  render() {
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
                Somos engenheiros, artistas e estudantes residentes em
                Florianópolis-SC unidos no combate ao CORONAVÍRUS (COVID-19).
                Utilizamos impressoras 3D para PRODUZIR e DOAR kits com viseira,
                elástico e suporte, assim como equipamentos emergenciais
                hospitalares para profissionais de saúde e outros em situação de
                vulnerabilidade.
              </p>
              <p className="text-justify">
                Você também pode nos ajudar nessa causa, SEM SAIR DE CASA,
                fazendo uma doação de qualquer valor para auxiliar na compra de
                matéria-prima e arcar com outros custos logísticos e
                operacionais.
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
}
