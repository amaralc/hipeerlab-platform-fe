import React from "react";
import Adriano from "./Layouts/Team/img/Adriano.png";
import Francisco from "./Layouts/Team/img/Francisco.png";
import Frederico from "./Layouts/Team/img/Frederico.png";
import Marcos from "./Layouts/Team/img/Marcos.png";
import Glauco from "./Layouts/Team/img/Glauco.png";
import Fernando from "./Layouts/Team/img/Fernando.png";
import Thaison from "./Layouts/Team/img/Thaison.png";
import Theodor from "./Layouts/Team/img/Theodor.png";
import Michel from "./Layouts/Team/img/Michel.png";
import Calil from "./Layouts/Team/img/Calil.png";
import Rafael from "./Layouts/Team/img/Rafael.png";
import Sara from "./Layouts/Team/img/Sara.png";
import Luise from "./Layouts/Team/img/Luise.png";
import Azevedo from "./Layouts/Team/img/Azevedo.png";
import Lazaro from "./Layouts/Team/img/Lazaro.png";
import Artur from "./Layouts/Team/img/Artur.png";
import Bruno from "./Layouts/Team/img/Bruno.png";
import Luam from "./Layouts/Team/img/Luam.png";

import In from "../img/in.png";
import {
  TeamCard,
  TeamImg,
  Div,
  InImg,
  Name,
  About,
  Title
} from "./Layouts/Team/styles";

export default function TeamContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mb-5 ">
          <h2>Sobre a Equipe</h2>
          <hr />
          <p>
            Nós somos engenheiros e estudantes residentes em Florianópolis-SC
            que decidiram, voluntariamente, se unir e buscar uma forma de ajudar
            nosso país no combate ao CORONAVÍRUS (COVID-19). Estamos utilizando
            impressoras 3D para PRODUZIR e DOAR equipamentos de proteção para os
            profissionais de saúde.
          </p>
        </div>
      </div>

      <Title className="py-3 mb-3">
        <p>Face Shield</p>
        <hr />
      </Title>

      <div className="row">
        <Div className="col-md-3 py-3 mb-3">
          <TeamCard>
            <TeamImg imgPath={Adriano} />
            <Name>Adriano S. P. Pereira</Name>
            <a
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
            >
              <InImg imgPath={In} />
            </a>
            <About>Engenheiro de Materiais</About>
          </TeamCard>
        </Div>

        <Div className="col-md-3 py-3 mb-3">
          <TeamCard>
            <TeamImg imgPath={Francisco} />
            <Name>Francisco Sedrez Warmling</Name>
            <a
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
            >
              <InImg imgPath={In} />
            </a>
            <About>Animator, 2D Rigger, 3D Modeler</About>
          </TeamCard>
        </Div>
        <Div className="col-md-3 py-3 mb-3">
          <TeamCard>
            <TeamImg imgPath={Frederico} />
            <Name>Frederico Baumgratz</Name>
            <a
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
            >
              <InImg imgPath={In} />
            </a>
            <About>Engenheiro Mecânico</About>
          </TeamCard>
        </Div>

        <Div className="col-md-3 py-3 mb-3">
          <TeamCard>
            <TeamImg imgPath={Marcos} />
            <Name>Marcos R. Butignol</Name>
            <a
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
            >
              <InImg imgPath={In} />
            </a>
            <About>Engenheiro Mecânico, Msc</About>
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
            >
              <InImg imgPath={In} />
            </a>
            <About>Produtor Audiovisual</About>
          </TeamCard>
        </Div>
        <Div></Div>
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
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
              href="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
              target="_blank"
            >
              <InImg imgPath={In} />
            </a>
            <About>Graduando em Engenharia Mecânica</About>
          </TeamCard>
        </Div>
      </div>
    </div>
  );
}
