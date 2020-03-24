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
            text="Frente de desenvolvimento em Joinville, SC"
            imgPath={projectJoinville}
            url="https://www.fablabjoinville.com.br/covid19/"
          />
        </div>
        <div className="col-md-3 mb-5">
          <Card
            title="OpenVentilator"
            text="Frente de desenvolvimento em São Paulo, SP"
            imgPath={projectOpenVentilator}
            url="https://www.popsolutions.co/en_US/openventilator"
          />
        </div>
        <div className="col-md-3 mb-5">
          <Card
            title="OxyGEN Project"
            text="Frente de desenvolvimento em Barcelona, Espanha"
            imgPath={projectOxygen}
            url="https://www.oxygen.protofy.xyz/?fbclid=IwAR3EEDQZRBOmSG8TFY582vxQLQe7skdjRaI8Z67ufgwCjIoil4Q5oWvMpAk"
          />
        </div>
        <div className="col-md-3 mb-5">
          <Card
            title="Open Source Ventilator"
            text="Frente de desenvolvimento na Irlanda"
            imgPath={projectOpenSourceVentilator}
            url="https://gitlab.com/open-source-ventilator"
          />
        </div>
      </div>
    </div>
  );
}
