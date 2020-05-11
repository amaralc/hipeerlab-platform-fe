import React from 'react';
import { SubTitle } from '../styles';

// import { Container } from './styles';

export default function Gerais() {
  return (
    <>
      <SubTitle>
        <p>Perguntas Gerais</p>
        <hr />
      </SubTitle>
      <div>
        <div className="row">
          <div className="col-md-12 mb-5 ">
            <h5>
              A iniciativa Juntos Contra o COVID-19, do grupo hipeerLab, tem
              fins lucrativos?
            </h5>
            <h7>
              Não, todo o dinheiro recebido por doações será destinado à
              produção de equipamentos de proteção e respiradores para doação
              aos profissionais de saúde e de coleta de lixo. Caso algum valor
              não seja usado, será doado para núcleos de educação e saúde em
              forma de dinheiro ou compra de equipamentos.
            </h7>
            <hr />

            <h5>
              É possível comprar ou revender os produtos doados pelo hipeerLab?
            </h5>
            <h7>Não! A venda dos produtos é expressamente proibida.</h7>
            <hr />

            <h5>
              Como posso doar para a iniciativa Juntos Contra o COVID-19 do
              hipeerLab?
            </h5>
            <h7>
              Para continuarmos a produção e a distribuição dos equipamentos
              emergenciais hospitalares, dependemos de doações. As doações podem
              ser feitas financeiramente ou em forma de insumos.{' '}
              <a href="/contribua">Contribua! &raquo;</a>
            </h7>
            <hr />

            <h5>Tenho uma impressora 3D e gostaria de ajudar. Como faço?</h5>
            <h7>
              Se você residir em Florianópolis (SC), possuir uma máquinas de
              impressão 3D e tiver o interesse em contibuir com a produção,
              entre em contato conosco por meio do WhatsApp (Calil Amaral - 47
              99735-7299).
            </h7>
            <hr />

            <h5>
              Como posso fazer a higienização das máscaras de proteção Face
              Shield?
            </h5>
            <h7>
              Todas as partes devem ser limpas com água e sabão neutro e
              deixadas para secar naturalmente. Então as partes podem ser
              desinfetadas com álcool 70% ou outro desinfetante equivalente.
            </h7>
            <hr />

            <h5>Os produtos possuem certificados de aprovação?</h5>
            <h7>
              Esse produto não possui certificados. A sua produção fez-se
              necessária para atender a escassez de equipamentos de proteção.
            </h7>
            <hr />

            <h5>Como posso fazer um pedido?</h5>
            <h7>
              Todos os pedidos estão sendo feitos via WhatsApp (Rafael Nunes -
              48 99800-6530).
            </h7>
            <hr />

            <h5>
              Qual a quantidade máxima de protetores faciais (face shield) que
              posso solicitar?
            </h5>
            <h7>
              Para possibilitar que a ajude chegue a mais pessoas, estamos
              limitando o pedido para o número máximo 25 máscaras de proteção
              (face shield). Após receber seu primeiro pedido, poderá fazer uma
              nova solicitação. Pedimos sua compreensão para que possamos
              atender a todos da melhor maneira possível.
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
