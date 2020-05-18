import React from 'react';
import Adriano from './img/Adriano.png';
import Francisco from './img/Francisco.png';
import Frederico from './img/Frederico.png';
import Marcos from './img/Marcos.png';
import Glauco from './img/Glauco.png';
import Fernando from './img/Fernando.png';
import Thaison from './img/Thaison.png';
import Theodor from './img/Theodor.png';
import Michel from './img/Michel.png';
import Calil from './img/Calil.png';
import Rafael from './img/Rafael.png';
import Sara from './img/Sara.png';
import Luise from './img/Luise.png';
import Azevedo from './img/Azevedo.png';
import Lazaro from './img/Lazaro.png';
import Artur from './img/Artur.png';
import Bruno from './img/Bruno.png';
import Luam from './img/Luam.png';
import Braulio from './img/Braulio.png';
import Larissa from './img/Larissa.png';
import Max from './img/Max.png';
import Lehmkuhl from './img/Lehmkuhl.png';
import Isabele from './img/Isabele.png';

import TeamMember from './TeamMember';
import { Div, Title } from './styles';

import Header from '../../components/Header';

export default function Team() {
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
          <h2>Impressão 3D</h2>
          <hr />
        </Title>

        <div className="row">
          <TeamMember
            name="Adriano S. P. Pereira"
            about="Engenheiro de Materiais"
            imgPath={Adriano}
            url="https://www.linkedin.com/in/adriano-sppereira-eng/"
          />

          <TeamMember
            name="Braulio Crippa"
            about="Engenheiro de Materiais"
            imgPath={Braulio}
            url="https://www.linkedin.com/in/braulio-crippa-877639134/"
          />

          <TeamMember
            name="Francisco Warmling"
            about="Animator, 3D Modeler"
            imgPath={Francisco}
            url="https://www.linkedin.com/in/francisco-warmling"
          />

          <TeamMember
            name="Frederico Baumgratz"
            imgPath={Frederico}
            url="https://www.linkedin.com/in/frederico-baumgratz/"
            about="Engenheiro Mecânico"
          />
        </div>

        <Title className="py-3 mb-3">
          <h2>Respiradores Mecânicos</h2>
          <hr />
        </Title>
        <div className="row">
          <TeamMember
            imgPath={Fernando}
            name="Fernando M. Bordin"
            url="https://www.linkedin.com/in/fernando-moreira-bordin-357aa1186/"
            about="Engenheiro Mecânico, Dr."
          />

          <TeamMember
            imgPath={Glauco}
            name="Glauco G. Tirollo"
            url="https://www.linkedin.com/in/gtirollo/"
            about="Engenheiro Químico"
          />

          <TeamMember
            imgPath={Marcos}
            name="Marcos R. Butignol"
            url="https://www.linkedin.com/in/marcos-rodrigues-butignol-87188a127/"
            about="Engenheiro Mecatrônico"
          />

          <TeamMember
            imgPath={Michel}
            name="Michel Tavares"
            url="https://www.linkedin.com/in/michel-tavares-6197609a/"
            about="Engenheiro Mecânico, Msc"
          />

          <TeamMember
            imgPath={Theodor}
            name="Theodor van Caspel"
            url="https://www.linkedin.com/in/theodor-van-caspel-49ba8886/"
            about="Engenheiro Mecânico"
          />
        </div>

        <Title className="py-3 mb-3">
          <h2>Logística</h2>
          <hr />
        </Title>
        <div className="row">
          <TeamMember
            imgPath={Calil}
            name="Calil Amaral"
            url="https://www.linkedin.com/in/calil-amaral-84005b67/"
            about="Engenheiro Mecânico"
          />

          <TeamMember
            imgPath={Glauco}
            name="Glauco G. Tirollo"
            url="https://www.linkedin.com/in/gtirollo/"
            about="Engenheiro Químico"
          />

          <TeamMember
            imgPath={Rafael}
            name="Rafael G. Nunes Silva"
            url="https://www.linkedin.com/in/rafael-nunes/"
            about="Engenheiro de Materiais"
          />

          <TeamMember
            imgPath={Sara}
            name="Sara Díaz Builes"
            url="https://www.linkedin.com/in/sara-díaz-builes-715b41114"
            about="Engenheira Mecânica"
          />

          <TeamMember
            imgPath={Luise}
            name="Vitória Luise Silva"
            url="https://www.linkedin.com/in/vit%C3%B3ria-luise-silva-04b99b191/"
            about="Graduanda em Engenharia Mecânica"
          />
        </div>

        <Title className="py-3 mb-3">
          <h2>Marketing</h2>
          <hr />
        </Title>

        <div className="row">
          <Div />

          <TeamMember
            imgPath={Azevedo}
            name="Edália Azevedo"
            url="https://www.linkedin.com/in/ed%C3%A1lia-azevedo/"
            about="Engenheira Mecânica"
          />

          <TeamMember
            name="Isabele Orengo"
            about="Produtora Audiovisual"
            imgPath={Isabele}
            url="https://www.linkedin.com/in/isabele-orengo-422b32152/"
          />

          <TeamMember
            imgPath={Lazaro}
            name="João R. C. Lazaro"
            url="https://LinkedIn.com/in/joaorlazaro"
            about="Produtor Audiovisual"
          />

          <Div />
        </div>

        <Title className="py-3 mb-3">
          <h2>Jurídico</h2>
          <hr />
        </Title>

        <div className="row">
          <TeamMember
            imgPath={Calil}
            name="Calil Amaral"
            url="https://www.linkedin.com/in/calil-amaral-84005b67/"
            about="Engenheiro Mecânico"
          />

          <TeamMember
            imgPath={Lazaro}
            name="João R. C. Lazaro"
            url="https://LinkedIn.com/in/joaorlazaro"
            about="Produtor Audiovisual"
          />

          <TeamMember
            imgPath={Larissa}
            name="Larissa Martins"
            url="https://www.linkedin.com/in/larissalealmartins/"
            about="Engenheira Mecânica"
          />

          <TeamMember
            imgPath={Rafael}
            name="Rafael G. Nunes Silva"
            url="https://www.linkedin.com/in/rafael-nunes/"
            about="Engenheiro de Materiais"
          />
        </div>

        <Title className="py-3 mb-3">
          <h2>Website</h2>
          <hr />
        </Title>
        <div className="row">
          <TeamMember
            imgPath={Artur}
            name="Artur Della Favera"
            url="https://www.instagram.com/arturdf/"
            about="Graduando em Engenharia Mecânica"
          />

          <TeamMember
            imgPath={Bruno}
            name="Bruno W. de Castro"
            url="https://www.linkedin.com/in/bruno-weber-de-castro-398641195/"
            about="Graduando em Engenharia Mecânica"
          />

          <TeamMember
            imgPath={Calil}
            name="Calil Amaral"
            url="https://www.linkedin.com/in/calil-amaral-84005b67/"
            about="Engenheiro Mecânico"
          />

          <TeamMember
            imgPath={Luam}
            name="Luam G. Maul"
            url="https://www.linkedin.com/in/luam-gabriel-maul-ab8144125/"
            about="Graduando em Engenharia Mecânica"
          />

          <TeamMember
            imgPath={Lehmkuhl}
            name="Rafael A. Lehmkuhl"
            url="https://www.linkedin.com/in/rafael-lehmkuhl/"
            about="Engenheiro Mecânico"
          />
        </div>
      </div>
    </div>
  );
}
