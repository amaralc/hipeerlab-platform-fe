import React from "react";
import Adriano from "./img/Adriano.png";
import Francisco from "./img/Francisco.png";
import Frederico from "./img/Frederico.png";
import Marcos from "./img/Marcos.png";
import Glauco from "./img/Glauco.png";
import Fernando from "./img/Fernando.png";
import Thaison from "./img/Thaison.png";
import Theodor from "./img/Theodor.png";
import Michel from "./img/Michel.png";
import Calil from "./img/Calil.png";
import Rafael from "./img/Rafael.png";
import Sara from "./img/Sara.png";
import Luise from "./img/Luise.png";
import Azevedo from "./img/Azevedo.png";
import Lazaro from "./img/Lazaro.png";
import Artur from "./img/Artur.png";
import Bruno from "./img/Bruno.png";
import Luam from "./img/Luam.png";
import Braulio from "./img/Braulio.png";
import Larissa from "./img/Larissa.png";
import Max from "./img/Max.png";
import Lehmkuhl from "./img/Lehmkuhl.png";

import In from "../../img/in.png";
import { TeamCard, TeamImg, Div, InImg, Name, About, Title } from "./styles";

import Header from "../../components/Header";

export default class Team extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="Equipe hipeerLab"
          headerText="Engenheiros, artistas e estudantes residentes em 
        Florianópolis-SC unidos no combate ao CORONAVÍRUS (COVID-19). Utilizamos
        impressoras 3D para PRODUZIR e DOAR equipamentos de proteção e equipamentos
        emergenciais hospitalares para profissionais de saúde e outros em situação
        de vulnerabilidade."
        />
        <div className="container">
          <Title className="py-3 mb-3">
            <p>Impressão 3D</p>
            <hr />
          </Title>

          <div className="row">
            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Adriano} />
                <Name>Adriano S. P. Pereira</Name>
                <a
                  href="https://www.linkedin.com/in/adriano-sppereira-eng/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro de Materiais</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Braulio} />
                <Name>Braulio Crippa</Name>
                <a
                  href="https://www.linkedin.com/in/braulio-crippa-877639134/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro de Materiais</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Francisco} />
                <Name>Francisco Warmling</Name>
                <a
                  href="https://www.linkedin.com/in/francisco-warmling"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Animator, 3D Modeler</About>
              </TeamCard>
            </Div>
            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Frederico} />
                <Name>Frederico Baumgratz</Name>
                <a
                  href="https://www.linkedin.com/in/frederico-baumgratz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Mecânico</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Marcos} />
                <Name>Marcos R. Butignol</Name>
                <a
                  href="https://www.linkedin.com/in/marcos-rodrigues-butignol-87188a127/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Mecatrônico</About>
              </TeamCard>
            </Div>
          </div>

          <Title className="py-3 mb-3">
            <p>Respiradores Mecânicos</p>
            <hr />
          </Title>
          <div className="row">
            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Glauco} />
                <Name>Glauco G. Tirollo</Name>
                <a 
                  href="https://www.linkedin.com/in/gtirollo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Químico</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Fernando} />
                <Name>Fernando M. Bordin</Name>
                <a
                  href="https://www.linkedin.com/in/fernando-moreira-bordin-357aa1186/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Mecânico, Dr.</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Thaison} />
                <Name>Thaison Prando</Name>
                <a
                  href="https://www.linkedin.com/in/thaison-prando-427070102/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Graduando em Engenharia Mecânica</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Theodor} />
                <Name>Theodor van Caspel</Name>
                <a
                  href="https://www.linkedin.com/in/theodor-van-caspel-49ba8886/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Mecânico</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Michel} />
                <Name>Michel Tavares</Name>
                <a
                  href="https://www.linkedin.com/in/michel-tavares-6197609a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Mecânico, Msc</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Max} />
                <Name>Max B. Rodrigues</Name>
                <a
                  href="https://www.linkedin.com/in/max-baranenko-rodrigues/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Mecatrônico, Msc</About>
              </TeamCard>
            </Div>
          </div>

          <Title className="py-3 mb-3">
            <p>Logística</p>
            <hr />
          </Title>
          <div className="row">
            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Calil} />
                <Name>Calil Amaral</Name>
                <a
                  href="https://www.linkedin.com/in/calil-amaral-84005b67/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Mecânico</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Glauco} />
                <Name>Glauco G. Tirollo</Name>
                <a 
                  href="https://www.linkedin.com/in/gtirollo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Químico</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Rafael} />
                <Name>Rafael G. Nunes Silva</Name>
                <a
                  href="https://www.linkedin.com/in/rafael-nunes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro de Materiais</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Sara} />
                <Name>Sara Díaz Builes</Name>
                <a
                  href="https://www.linkedin.com/in/sara-díaz-builes-715b41114"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheira Mecânica</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Luise} />
                <Name>Vitória Luise Silva</Name>
                <a
                  href="https://www.linkedin.com/in/vit%C3%B3ria-luise-silva-04b99b191/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Graduanda em Engenharia Mecânica</About>
              </TeamCard>
            </Div>
          </div>

          <Title className="py-3 mb-3">
            <p>Marketing</p>
            <hr />
          </Title>
          <div className="row">
            <Div></Div>
            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Azevedo} />
                <Name>Edália Azevedo</Name>
                <a
                  href="https://www.linkedin.com/in/ed%C3%A1lia-azevedo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheira Mecânica</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Lazaro} />
                <Name>João R. C. Lazaro</Name>
                <a 
                  href="https://LinkedIn.com/in/joaorlazaro" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Produtor Audiovisual</About>
              </TeamCard>
            </Div>
            <Div></Div>
          </div>

          <Title className="py-3 mb-3">
            <p>Jurídico</p>
            <hr />
          </Title>
          <div className="row">
            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Calil} />
                <Name>Calil Amaral</Name>
                <a
                  href="https://www.linkedin.com/in/calil-amaral-84005b67/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Mecânico</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Lazaro} />
                <Name>João R. C. Lazaro</Name>
                <a 
                  href="https://LinkedIn.com/in/joaorlazaro" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Produtor Audiovisual</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Larissa} />
                <Name>Larissa Martins</Name>
                <a
                  href="https://www.linkedin.com/in/larissalealmartins/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheira Mecânica</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Rafael} />
                <Name>Rafael G. Nunes Silva</Name>
                <a
                  href="https://www.linkedin.com/in/rafael-nunes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro de Materiais</About>
              </TeamCard>
            </Div>
          </div>

          <Title className="py-3 mb-3">
            <p>Website</p>
            <hr />
          </Title>
          <div className="row">
            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Artur} />
                <Name>Artur Della Favera</Name>
                <a 
                  href="https://www.instagram.com/arturdf/" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    
                  <InImg imgPath={In} />
                </a>
                <About>Graduando em Engenharia Mecânica</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Bruno} />
                <Name>Bruno W. de Castro</Name>
                <a
                  href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Graduando em Engenharia Mecânica</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Calil} />
                <Name>Calil Amaral</Name>
                <a
                  href="https://www.linkedin.com/in/calil-amaral-84005b67/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Mecânico</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Luam} />
                <Name>Luam G Maul</Name>
                <a
                  href="https://www.linkedin.com/in/luam-gabriel-maul-ab8144125/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Graduando em Engenharia Mecânica</About>
              </TeamCard>
            </Div>

            <Div className="col-md-2 py-3 mb-3">
              <TeamCard>
                <TeamImg imgPath={Lehmkuhl} />
                <Name>Rafael A. Lehmkuhl</Name>
                <a
                  href="https://www.linkedin.com/in/rafael-lehmkuhl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InImg imgPath={In} />
                </a>
                <About>Engenheiro Mecânico</About>
              </TeamCard>
            </Div>
          </div>
        </div>
      </div>
    );
  }
}
