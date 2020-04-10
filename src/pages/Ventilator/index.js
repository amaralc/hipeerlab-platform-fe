import React from "react";
import Card from "../../components/Card";
import projectJoinville from "../../img/project-joinville-croped-2.png";
import projectOxygen from "../../img/project-oxygen-croped-2.png";
import projectOpenVentilator from "../../img/project-open-ventilator-croped-2.png";
import projectOpenSourceVentilator from "../../img/project-open-source-ventilator-croped-2.png";
import projecthipeerLab from "../../img/project-hipeerlab-croped-2.png";
import projectVentilaid from "../../img/project-ventilaid-2.png";
import projectMitEVent from "../../img/project-mit-e-vent-2.png";
import projectBreathe4Life from "../../img/project-breathe-4-life-2.png";
import projectOxVent from "../../img/project-Ox-Vent-cropped.png";
import projectOpenVent from "../../img/project-open-vent-bristol-cropped.png";
import projectAmboVent from "../../img/project-ambo-vent-cropped.png";
import projectVentilatorPal from "../../img/project-ventilator-pal-croped.png"; 
import projectRespiraWorks from "../../img/project-respira-works-croped.png";

import Header from "../../components/Header";

export default class Ventilator extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="Projetos de Respiradores Mecânicos"
          headerText="Indexação dos projetos de respiradores mecânicos de baixo custo
              para utilização em hospitais no combate à COVID-19."
        />
        <div className="container">
          <div className="row">
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="Equipe hipeerLab"
                location="Florianópolis, Brasil"
                updatedAt="31/03/2020"
                status="Em fase de projeto"
                imgPath={projecthipeerLab}
                url="https://cad.onshape.com/documents/e5be8ec8b08e9cf7da0f61df/w/deeaf8c80be6a7337b6eb1dc/e/a6d575935da95adc5c422287"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="Fablab Joinville"
                location="Joinville, Brasil"
                updatedAt="23/03/2020"
                status="Validação de protótipo"
                imgPath={projectJoinville}
                url="https://www.fablabjoinville.com.br/covid19/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="OpenVentilator"
                location="São Paulo, Brasil"
                updatedAt="31/03/2020"
                status="Em fase de projeto"
                imgPath={projectOpenVentilator}
                url="https://www.popsolutions.co/en_US/openventilator"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="Breath4Life"
                location="Florianópolis, Brasil"
                updatedAt="27/03/2020"
                status="Protótipo pronto"
                imgPath={projectBreathe4Life}
                url="https://breath4lifeproject.com/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="OxyGEN Project"
                location="Barcelona, Espanha"
                updatedAt="01/03/2020"
                status="Em operação"
                imgPath={projectOxygen}
                url="https://www.oxygen.protofy.xyz/?fbclid=IwAR3EEDQZRBOmSG8TFY582vxQLQe7skdjRaI8Z67ufgwCjIoil4Q5oWvMpAk"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="MIT E-vent"
                location="Cambridge, EUA"
                updatedAt="30/03/2020"
                status="Em fase de projeto"
                imgPath={projectMitEVent}
                url="https://e-vent.mit.edu/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="Ventilaid"
                location="Cracóvia, Polônia"
                updatedAt="31/03/2020"
                status="Protótipo pronto"
                imgPath={projectVentilaid}
                url="https://www.ventilaid.org/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="Open Source Ventilator"
                location="Dublin, Irlanda"
                updatedAt="01/04/2020"
                status="Validação de protótipo"
                imgPath={projectOpenSourceVentilator}
                url="https://opensourceventilator.ie/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="OxVent"
                location="Londres, Reino Unido"
                updatedAt="08/04/2020"
                status="Protótipo pronto"
                imgPath={projectOxVent}
                url="https://oxvent.org/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="OpenVent-Bristol"
                location="Bristol, Reino Unido"
                updatedAt="01/04/2020"
                status="Protótipo pronto"
                imgPath={projectOpenVent}
                url="https://www.instructables.com/id/COVID-19-Rapid-Manufacture-Ventilator-BVM-Ambubag-/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="AmboVent"
                location="Israel"
                updatedAt="08/04/2020"
                status="Protótipo pronto"
                imgPath={projectAmboVent}
                url="https://members.smoove.io//view.ashx?message=h44811613O122349105O219654O122419175&r=1009"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="VentilatorPAL"
                location="Nimegue, Holanda"
                updatedAt="08/04/2020"
                status="Protótipo pronto"
                imgPath={projectVentilatorPal}
                url="https://freebreathing.org/"
                button="Ver Projeto"
              />
            </div>
            <div className="col-md-3 py-3 mb-3">
              <Card
                title="RespiraWorks"
                location="EUA"
                updatedAt="27/03/2020"
                status="Em fase de projeto"
                imgPath={projectRespiraWorks}
                url="https://respira.works/our-vision"
                button="Ver Projeto"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
