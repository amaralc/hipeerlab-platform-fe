import React from "react";
import Card from "./Card";
import projectJoinville from "../img/project-joinville-croped.png";
import projectOxygen from "../img/project-oxygen-croped.png";
import projectOpenVentilator from "../img/project-open-ventilator-croped.png";
import projectOpenSourceVentilator from "../img/project-open-source-ventilator-croped.png";

export default function PageContent() {
  return (
    <div className="container">
      {/*
      <div className="row">
        <div className="col-md-8 mb-5">
          <h2>Projetos de Respiradores Mecânicos</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt
            neque tempore recusandae animi soluta quasi? Asperiores rem dolore
            eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat
            explicabo, maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            optio neque consectetur consequatur magni in nisi, natus beatae
            quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt
            voluptate. Voluptatum.
          </p>
          <a className="btn btn-primary btn-lg" href="#">
            Call to Action &raquo;
          </a>
        </div>
        
        <div className="col-md-4 mb-5">
          <h2>Contact Us</h2>
          <hr />
          <address>
            <strong>LMP</strong>
            <br />
            R. Eng. Agronômico Andrei Cristian Ferreira, s/n
            <br />
            Trindade, Florianópolis, SC
            <br />
            CEP 88040-900
            <br />
          </address>
          <address>
            <abbr title="Phone">P:</abbr>
            +55 (48) 3271-7229
            <br />
            <abbr title="Email">E:</abbr>
            <a href="mailto:#"> lmp@ufsc.br</a>
          </address>
        </div>
      </div>
      */}

      <div className="row">
        <div className="col-md-3 mb-5">
          <Card
            title="Fablab Joinville"
            location= "Joinville, Brasil"
            updatedAt= "23/03/2020"
            status= "Validação de protótipo"
            imgPath={projectJoinville}
            url="https://www.fablabjoinville.com.br/covid19/"
          />
        </div>
        <div className="col-md-3 mb-5">
          <Card
            title="OpenVentilator"
            location= "São Paulo, Brasil"
            updatedAt= "24/02/2020"
            status= "Em fase de projeto"
            imgPath={projectOpenVentilator}
            url="https://www.popsolutions.co/en_US/openventilator"
          />
        </div>
        <div className="col-md-3 mb-5">
          <Card
            title="OxyGEN Project"
            location= "Barcelona, Espanha"
            updatedAt= "22/03/2020"
            status= "Em operação"
            imgPath={projectOxygen}
            url="https://www.oxygen.protofy.xyz/?fbclid=IwAR3EEDQZRBOmSG8TFY582vxQLQe7skdjRaI8Z67ufgwCjIoil4Q5oWvMpAk"
          />
        </div>
        <div className="col-md-3 mb-5">
          <Card
            title="Open Source Ventilator"
            location= "Dublin, Irlanda"
            updatedAt= "21/03/2020"
            status= "Validação de protótipo"
            imgPath={projectOpenSourceVentilator}
            url="https://opensourceventilator.ie/"
          />
        </div>
      </div>
    </div>
  );
}
