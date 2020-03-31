import React from "react";
import Card from "./Card";
import Ventilator from "../img/project-joinville-croped.png";
import FaceShield from "../img/faceShield.png";

export default function FaqContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mb-5 ">
          <h5>
            A iniciativa hipeerLab - Juntos Contra o COVID-19 possui lucro?
          </h5>
          <p>
            Não, todo o dinheiro recebido por doações será destinado à produção
            de equipamentos de proteção e respiradores para doação aos
            profissionais de saúde e de coleta de lixo. Caso algum valor não
            seja usado, será doado para hospitais em forma de dinheiro ou compra
            de equipamentos.
          </p>
          <hr />

          <h5>É possível comprar ou revender os produtos da hipeerLab?</h5>
          <p>Não! A venda dos produtos é expressamente proibida.</p>
          <hr />

          <h5>Como posso ajudar com a iniciativa da hipeerLab?</h5>
          <p>
            A única forma de continuarmos a produção e a doação dos nossos
            produtos é por meio de doações.{"  "}
            <a href="/contribua">Contribua! &raquo;</a>
          </p>
          <hr />

          <h5>Tenho uma impressora 3D e gostaria de ajudar. Como faço?</h5>
          <p>
            Se você residir em Florianópolis (SC), possuir uma máquinas de
            impressão 3D e tiver o interesse em contibuir com a produção, entre
            em contato conosco por meio do WhatsApp (Calil Amaral - 47
            99735-7299).
          </p>
          <hr />

          <h5>
            Como posso fazer a higienização das máscaras de proteção Face
            Shield?
          </h5>
          <p>
            Todas as partes devem ser limpas com água e sabão neutro e deixadas
            para secar naturalmente. Então as partes podem ser desinfetadas com
            álcool 70% ou outro desinfetante equivalente.
          </p>
          <hr />

          <h5>Os produtos possuem certificados de aprovação?</h5>
          <p>
            Esse produto não possui certificados. A sua produção fez-se
            necessária para atender a escassez de equipamentos de proteção.
          </p>
          <hr />

          <h5>Como posso fazer um pedido?</h5>
          <p>
            Todos os pedidos estão sendo feitos via WhatsApp (Rafael Nunes - 48
            99800-6530).
          </p>
          <hr />

          <h5>Qual o máximo de unidades que posso solicitar?</h5>
          <p>
            Para possibilitar que a ajude chegue a todos que estão necessitando,
            estamos limitando o pedido para o número máximo 25 máscaras de
            proteção Face Shield. Após receber o pedido solicitado, é possível
            fazer novamente um novo pedido. Pedimos a compreensão para podermos
            atender a todos da melhor forma possível.
          </p>
          {/*
          <hr />

          <h5></h5>
          <p></p>
          <hr />
          */}
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 py-3 mb-3">
          <Card
            title="Respiradores"
            location=""
            updatedAt=""
            status=""
            imgPath={Ventilator}
            url="/respiradores"
            button="Ver Projetos"
          />
        </div>
        <div className="col-md-6 py-3 mb-3">
          <Card
            title="Suprimentos"
            location=""
            updatedAt=""
            status=""
            imgPath={FaceShield}
            url="/suprimentos"
            button="Ver Projetos"
          />
        </div>
      </div>
    </div>
  );
}
