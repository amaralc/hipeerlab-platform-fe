import React from "react";
import Card from "../../components/Card";
import faceShield from "../../img/faceShield.png";
import medicalShield from "../../img/medicalshield.png";
import hipeerShields from "../../img/hipeerShields.png";
import tiaraAcetato from "../../img/mascara-tiara-acetato.png";
import prusaFaceShield from "../../img/prusaFaceShield.png";
import diyFaceShield from "../../img/diyFaceShield.png";
import ambevFaceShield from "../../img/ambevFaceShield.png";
import imaginum3dlogo from "../../img/imaginum3dlogo.png";
import santoshackerlogo from "../../img/santoshackerlogo.png";
import sicnovaproject from "../../img/sicnovaproject.png";
import aegisproject from "../../img/aegisproject.png";
import poliproject from "../../img/poliproject.png";
import feiproject from "../../img/feiproject.png";
import fablab3dtoyproject from "../../img/fablab3dtoyproject.png";
import fixitproject from "../../img/fixitproject.png";
import unespproject from "../../img/unespproject.png";
import sos3dproject from "../../img/sos3dproject.png";
import utfprproject from "../../img/utfprproject.png";
import atitude3dproject from "../../img/atitude3dproject.png";

import Header from "../../components/Header";

// import { Container } from './styles';

export default class Supplies extends React.Component {
  render() {
    return (
      <div>
        <Header
          headerTitle="Fabricação de itens auxiliares"
          headerText="Frentes de fabricação e distribuição de viseiras, shields
          e outros itens de apoio, úteis para a prevenção da propagação do COVID-19."
        />
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-5">
              <Card
                title="Equipe hipeerLab"
                location="Florianópolis, Brasil"
                updatedAt="25/03/2020"
                status="Em operação"
                imgPath={hipeerShields}
                url="https://www.instagram.com/hipeerlab/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="FabLab Joinville"
                location="Joinville, Brasil"
                updatedAt="25/03/2020"
                status="Em operação"
                imgPath={faceShield}
                url="https://www.fablabjoinville.com.br/covid19/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Konrad Klepacki"
                location="Gdynia, Polônia"
                updatedAt="24/03/2020"
                status="Em operação"
                imgPath={medicalShield}
                url="https://hackaday.io/project/170481-laser-cut-medical-shield"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Medicina - USP"
                location="São Paulo, Brasil"
                updatedAt="02/04/2020"
                status="Em operação"
                imgPath={tiaraAcetato}
                url="https://www.youtube.com/watch?v=AKJjZ7m8A7c"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Prusa RC3"
                location="Praga, República Tcheca"
                updatedAt="07/04/2020"
                status="Em operação"
                imgPath={prusaFaceShield}
                url="https://www.prusaprinters.org/prints/25857-prusa-face-shield"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Penang Science Cluster"
                location="Pulau Pinang, Malásia"
                updatedAt="07/04/2020"
                status="Em operação"
                imgPath={diyFaceShield}
                url="https://www.pscpen.com/events/psc-faceshield/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Cervejaria Ambev"
                location="São Paulo, Brasil"
                updatedAt="08/04/2020"
                status="Em operação"
                imgPath={ambevFaceShield}
                url="https://www.linkedin.com/posts/ambev_alaezmdosraejtulos-activity-6653374061483225088-Pds4"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="iMaginum 3D"
                location="São Lourenço do Oeste, Brasil"
                updatedAt="09/04/2020"
                status="Em operação"
                imgPath={imaginum3dlogo}
                url="https://www.imaginum3d.com.br/pagina/imaginum3d-contra-o-covid-19.html"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Santos Hacker Club"
                location="Santos, Brasil"
                updatedAt="09/04/2020"
                status="Em operação"
                imgPath={santoshackerlogo}
                url="https://faceshield.santoshackerclube.net/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Sicnova 3D"
                location="Linares, Espanha"
                updatedAt="10/04/2020"
                status="Em operação"
                imgPath={sicnovaproject}
                url="https://portal3dcovid19.es/www/portal3d/productos/adjuntos/1/Visera_plana_rapida_1.pdf"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Aegis V1A"
                location="Filipinas"
                updatedAt="13/04/2020"
                status="Em operação"
                imgPath={aegisproject}
                url="https://www.thingiverse.com/thing:4238890"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Poli USP"
                location="São Paulo, Brasil"
                updatedAt="13/04/2020"
                status="Em operação"
                imgPath={poliproject}
                url="https://www.poli.usp.br/faceshields"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Campus Universitário FEI"
                location="São Bernardo do Campo, Brasil"
                updatedAt="13/04/2020"
                status="Em operação"
                imgPath={feiproject}
                url="https://fei.edu.br/coronavirus/fei-e-abinfer-produzirao-mascaras-contra-covid19.html"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="FabLab 3DToy"
                location="Campinas, Brasil"
                updatedAt="13/04/2020"
                status="Em operação"
                imgPath={fablab3dtoyproject}
                url="https://www.facebook.com/Loja3dtoy/posts/1628637810607730?__xts__[0]=68.ARDuuAv5KXEtNLmWTy47XViN5JuuNvOe0eoLHBBue1DvaxNvz0EVLpdIBIOt6s8l7RehHyEFoCRXnJL9wMRyTbWFMyTtZe2v1WVx10_Vw0oWQiWQlnzEhZR7jOeRZ4DjexrYvKSXbThhqP7EutIPKeCWzrTV2tImlwN4Igjl8UNraho6a5UJsQ-n__FWVN7EJ3b0oHzCIdjXhtVbidncM3kH4yjtzZcM7Ld9RcKIqHL3cR-7PR_yt7_P67mvNxkQD7Fvnm3R3ZvgKO8DmyukgftshD4RdWl_OxzZysiAdCgQ5OgSoNgcty06z5i-xJSAh4Uwc2xMT6CuwJmjs6sYU66Wwp0vmib_MZHqheAmZEB0e_vHqP7QR2Kp4qKLrEcWWcyaIZhwJ3RsnDqq8v2YuG_TkABaEtkGVH5hXiVDQapz1B0&__tn__=-R"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Fix it"
                location="São Paulo, Brasil"
                updatedAt="15/04/2020"
                status="Em operação"
                imgPath={fixitproject}
                url="https://www.instagram.com/p/B--ZnfaFmR4/"
                /* Tem o site deles, entretanto não menciona sobre a fabricação de face shields e a doação delas https://usefixit.com.br/ */
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="UNESP"
                location="Ilha Solteira, Brasil"
                updatedAt="15/04/2020"
                status="Em operação"
                imgPath={unespproject}
                url="https://www.feis.unesp.br/#!/covid-19/pagina"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="SOS 3D COVID 19"
                location="Rio de Janeiro, Brasil"
                updatedAt="15/04/2020"
                status="Em operação"
                imgPath={sos3dproject}
                url="https://sos3dcovid19.com.br/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Área 42 - UTFPR"
                location="Cornélio Precópio, Brasil"
                updatedAt="15/04/2020"
                status="Em operação"
                imgPath={utfprproject}
                url="https://www.facebook.com/pfarea42/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 mb-5">
              <Card
                title="Atitude 3D"
                location="Curitiba, Brasil"
                updatedAt="15/04/2020"
                status="Em operação"
                imgPath={atitude3dproject}
                url="https://www.instagram.com/atitude3dvoluntario/"
                button="Ver Projeto"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
