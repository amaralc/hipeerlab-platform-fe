import React from 'react';
import { Link } from 'react-router-dom';
import { SubTitle } from '../styles';

// import { Container } from './styles';

export default function Respirador() {
  return (
    <>
      <SubTitle>
        <p>Perguntas sobre o respirador mecânico em que estamos trabalhando</p>
        <hr />
      </SubTitle>
      <div>
        <div className="row">
          <div className="col-md-12 mb-5 ">
            <h5>Qual o nome do projeto que escolhemos?</h5>
            <h7>
              Escolhemos o projeto{' '}
              <a
                href="https://www.oxygen.protofy.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OxyGEN
              </a>{' '}
              da equipe{' '}
              <a
                href="https://protofy.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Protofy
              </a>{' '}
              , de Barcelona na Espanha.
            </h7>
            <hr />

            <h5>Em qual versão do projeto estamos trabalhando atualmente?</h5>
            <h7>
              Inicialmente fabricamos um protótipo do modelo OxyGEN M V5, em
              acrílico para avaliar o conceito presencialmente. Em seguida
              passamos a desenvolver a versão OxyGEN IP, feito de chapas
              metálicas , por entender que essa versão oferece maior robustez
              para operar em situações adversas.
              <Link to="/respiradores-hipeerlab">
                {' '}
                Confira a evolução do projeto! &raquo;
              </Link>
            </h7>
            <hr />

            <h5>
              Por que escolhemos um projeto de baixa complexidade tecnológica?
            </h5>
            <h7>
              Escolhemos um projeto de menor complexidade tecnológica para
              atender à demanda emergencial considerando os seguintes
              requisitos:
              <br />
              1. Ser fácil de construir com componentes de baixa complexidade e
              alta disponibilidade no mercado;
              <br />
              2. Ser fácil de fabricar, usar e consertar;
              <br />
              3. Permitir produção em massa a um baixo custo unitário (abaixo de
              6 mil reais);
            </h7>
            <hr />

            <h5>Para quem é direcionado?</h5>
            <h7>
              Para os profissionais de saúde qualificados que se encontrem em
              situações extremas com baixa disponibilidade de ventiladores
              pulmonares e que precisem, como último recurso, de um dispositivo
              capaz de automatizar um ressuscitador manual do tipo AMBU,
              usualmente encontrado em ambulâncias. Este dispositivo pode ser
              construído em um curto espaço de tempo e faz uso de componentes de
              alta disponibilidade no mercado. É um dispositivo desenvolvido
              para ser utilizado em situações críticas em triagem nas
              emergências hospitalares e <strong>NÃO</strong> foi desenvolvido
              para substituir outros tipos superiores de equipamentos
              profissionais mais seguros.
            </h7>
            <hr />

            <h5>OxyGEN substitui um ventilador pulmonar homologado?</h5>
            <h7>
              <strong>Não!</strong> O OxyGEN IP é um dispositivo de emergência.
              Ele não é uma solução para substituir ventiladores pulmonares
              profissionais. É uma solução de emergência para situações
              extremas, quando não houver outra opção.
            </h7>
            <hr />

            <h5>Como posso ajudar?</h5>
            <h7>
              OxyGEN é um projeto OPEN SOURCE e livre, você pode fazer ajustes
              ou adicionar novas ideias desde que mantenha-o aberto e livre para
              qualquer cidadão do mundo. Para ajudar a equipe hipeerLab a
              fabricar os respiradores OxyGEN você pode fazer uma doação através
              de nossa página de financiamento coletivo.
              <a
                href="http://vaka.me/1015856"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                Contribua! &raquo;
              </a>
            </h7>
            <hr />

            <h5>Onde posso encontrar os arquivos do projeto?</h5>
            <h7>
              Tanto os arquivos do projeto original, quanto os arquivos do
              projeto adaptado para o mercado nacional pela equipe de
              voluntários anônimos e o projeto adaptado para o estado de Santa
              Catarina, pelo grupo hipeerLab, podem ser encontrados no nosso
              repositório do github.
              <a
                href="https://github.com/hipeerlab/oxygen"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                Confira os arquivos do projeto! &raquo;
              </a>{' '}
            </h7>
            <hr />

            <h5>Quem está por trás do projeto OxyGEN?</h5>
            <h7>
              <a
                href="https://www.oxygen.protofy.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OxyGEN
              </a>{' '}
              é um projeto colaborativo de hardware iniciado no conduzido pelo
              grupo{' '}
              <a
                href="https://protofy.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Protofy
              </a>{' '}
              na Espanha. Qualquer pessoa pode contribuir com ideias, planos ou
              conhecimento. Você pode contatá-los através do e-mail:
              oxygen@protofy.xyz.
            </h7>
            <hr />

            <h5>O que é o grupo Protofy?</h5>
            <h7>
              Protofy é uma companhia sediada em Barcelona que oferece suporte
              para inovação de hardware e software a companhias e departamentos
              de engenharia.
            </h7>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
