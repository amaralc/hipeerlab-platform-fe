import React from 'react';
import { Link } from 'react-router-dom';
import { SubTitle } from '../styles';

// import { Container } from './styles';

export default function Respirador() {
  return (
    <>
      <div>
        <div className="row">
          <SubTitle>
            <p>Aspectos gerais</p>
            <hr />
          </SubTitle>
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
          </div>

          <SubTitle>
            <p>Aspectos técnicos</p>
            <hr />
          </SubTitle>
          <div className="col-md-12 mb-5 ">
            <h5>O Equipamento opera a pressão ou volume controlado?</h5>
            <h7>
              OxyGEN trabalha no modo de ventilação controlada por volume (VCV),
              não ventilação controlada por pressão (PCV).
            </h7>
            <hr />
            <h5>Há alguma proteção contra sobrepressão?</h5>
            <h7>
              Nós recomendamos o uso de válvulas de segurança ajustada a 40
              cmH2O entre o AMBU (BVM) e o paciente para, dessa forma, evitar o
              risco barotrauma. Isso nos leva a dizer que o OxyGEN é um
              dispositivo que trabalha como “unidade com volume controlado com
              uma pressão limite”.
            </h7>
            <hr />

            <h5>O que é a taxa respiratória?</h5>
            <h7>
              Esse valor é dado em respirações por minuto. Usualmente de 10 a 15
              por minuto, podendo chegar a 30 por minuto.
            </h7>
            <hr />

            <h5>Qual a taxa respiratória do OxyGEN?</h5>
            <h7>
              OxyGEN vem com um dimmer que permite alterar a velocidade do motor
              de limpador de para-brisas que opera o equipamento. A taxa de
              respiração pode ser ajustada em qualquer valor entre 10 e 30 por
              minuto.
            </h7>
            <hr />

            <h5>O que é a razão I:E?</h5>
            <h7>
              É a razão entre o tempo desprendido durante a inspiração e o tempo
              desprendido na expiração. Usualmente é 1:2, o que significa 2
              vezes mais tempo para expirar que para inspirar.
            </h7>
            <hr />

            <h5>Quais razões I:E o OxyGEN pode prover?</h5>
            <h7>
              A equipe da OxyGEN desenvolveu 3 conjuntos de 5 cames cada, para
              cobrir as proporções 1:1 , 1:2 e 1:3, sendo a proporção 1:2 a mais
              comum, entretanto mais conjuntos de cames podem ser feitos.
            </h7>
            <hr />

            <h5>O que é volume corrente?</h5>
            <h7>
              É o volume de ar inspirado durante toda a respiração (usualmente
              350 a 600 ml).
            </h7>
            <hr />

            <h5>O OxyGEN pode prover vários volumes correntes?</h5>
            <h7>
              Usamos um conjunto de cames para alterar o volume corrente. Para
              cada proporção I:E, temos 5 cames. Foi o que a agência sanitária
              espanhola exigiu para a homologação, mas não há limite de cames.
              Devido ao sistema de cames intercambiáveis, você pode aumentar o
              número de cames para cobrir uma faixa de volumes mais ampla.
            </h7>
            <hr />

            <h5>Qual volume cada came provê?</h5>
            <h7>
              Os cames que são usados com a autorização da agência sanitária
              espanhola por exemplo, provêm para uma I:E de 1:2 os volumes: 450
              ml, 500 ml, 545 ml, 600 ml e 650 ml.
            </h7>
            <hr />

            <h5>Quanto tempo demora para a troca de cames?</h5>
            <h7>
              Demora em torno de 15 segundos para realizar a troca de um came
              (mudando o volume).
            </h7>
            <hr />

            <h5>O que é a FiO2?</h5>
            <h7>
              Essa é a fração de oxigênio no gás inspirado, variando de 0,21 a
              1,0. Todos os ressuscitadores do BVM vêm com uma bolsa, incluindo
              um conector de O2 (na parte traseira), para adicionar O2 ao ar que
              vai para o paciente.
            </h7>
            <hr />

            <h5>O que é assincronismo?</h5>
            <h7>
              É quando o paciente quer fazer uma coisa, mas o ventilador quer
              fazer outra. Um ventilador profissional geralmente possui sensores
              para detectar o que o paciente deseja, a fim de se adaptar a essa
              situação. Mas esse não é o caso de ventiladores de emergência como
              o OxyGEN: é por isso que deve ser usado em pacientes sedados e
              paralisados.
            </h7>
            <hr />

            <h5>O que é o desmame?</h5>
            <h7>
              Este é o processo importante de permitir gradualmente ao paciente
              respirar mais por si próprio. Poderíamos vê-lo como o processo de
              "despertar". Quanto mais respiração um paciente puder fazer
              enquanto estiver num ventilador, mais rapidamente isso ocorrerá.
              Um dispositivo de emergência como o oxyGEN não oferece uma maneira
              fácil de prover o desmame.
            </h7>
            <hr />

            <h5>O OxyGEN tem gatilhos a partir do paciente?</h5>
            <h7>
              Não, neste estágio, o dispositivo oxyGEN não possui um sensor
              conectado ao paciente que possa atuar no próprio OxyGEN. Um
              ventilador profissional geralmente pode detectar o ato de iniciar
              a inspiração, tossir, etc e depois adaptar rapidamente a pressão /
              volume, a fim de evitar conflito com o paciente. Mas isso não se
              aplica tanto a um paciente sedado e paralisado.
            </h7>
          </div>
          <SubTitle>
            <p>COVID-19</p>
            <hr />
          </SubTitle>
          <div className="col-md-12 mb-5 ">
            <h5>
              Qual a porcentagem de pacientes do COVID que realmente precisam de
              um ventilador?
            </h5>
            <h7>
              Em meados de abril de 2020, os dados coletados relacionados à
              pandemia mostraram que 30% da população infectada pelo Covid-19
              são assintomáticos, 55% apresentam sintomas leves / moderados, 10%
              sofrem sintomas graves que induzem hospitalização e os 5%
              restantes sofrem falha respiratória, onde a ventilação mecânica
              invasiva é obrigatória.
            </h7>
            <hr />
            <h5>O OxyGEN pode ser utilizado em pacientes não intubados?</h5>
            <h7>
              O OxyGEN é indicado para pacientes que sofrem de insuficiência
              respiratória crítica (apenas 5% da população total infectada pelo
              COVID), o que exige ventilação mecânica invasiva, ou seja, quando
              a intubação é necessária. A ventilação mecânica não invasiva, como
              o uso de um Ventimask ou Monogan com O2, não é compatível com o
              dispositivo OxyGEN.
            </h7>
            <hr />

            <h5>O paciente deve estar sedado para uso do OxyGEN?</h5>
            <h7>
              <strong>Sim!</strong> como em qualquer outro aparelho destinado a
              ventilação invasiva, pacientes usando o OxyGEN devem estar sedados
              e paralisados.
            </h7>
            <hr />

            <h5>E sobre a FiO2 para pacientes com COVID?</h5>
            <h7>
              Para pacientes com COVID que sofrem de insuficiência respiratória
              crítica, é de vital importância que eles estejam conectados a uma
              fonte de O2 e não ao ar atmosférico. Significando que
              absolutamente todos os pacientes conectados a um dispositivo de
              ventilação mecânica invasiva como o OxyGEN devem ser conectados a
              uma fonte de O2 (seja uma garrafa autônoma ou um tubo de O2 no
              hospital).
            </h7>
            <hr />

            <h5>O OxyGEN já foi usado em pacientes com COVID?</h5>
            <h7>
              <strong>Sim!</strong> quando a taxa e o volume estão corretos, o
              paciente pode permanecer por horas ligado ao OxyGEN com um
              controle periódico de um médico (a) ou enfermeiro(a).
            </h7>
            <hr />

            <h5>
              O OxyGEN já foi utilizado em pacientes com COVID sobre efeito de
              SDRA?
            </h5>
            <h7>
              O OxyGEN foi usado com pacientes com SDRA, mas não por muito
              tempo, porque nesse caso a pressão e o volume precisam ser
              verificados regularmente para que possam ser ajustados. Um
              ventilador profissional seria a solução perfeita, se disponível.
            </h7>
            <hr />

            <h5>
              Quanto tempo poderia um paciente permanecer conectado a um OxyGEN?
            </h5>
            <h7>
              Se o paciente estiver sedado e paralisado e o valor máximo da
              válvula de segurança de pressão não estiver funcionando com
              freqüência (o que significaria altas pressões para baixa
              conformidade), ele poderiam ser conectadas por dias. No caso de
              uma adesão muito baixa, o paciente precisa de um ventilador de
              alta tecnologia e, mesmo com acesso a eles, a ventilação se torna
              realmente desafiadora.
            </h7>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
