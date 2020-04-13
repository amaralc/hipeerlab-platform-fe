/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";
import Header from "../../components/Header";
import { Title, SubTitle, Row } from "./styles";

/* --------------------------------- EXPORTS ---------------------------------*/
export default class Accoutability extends React.Component {
  render() {
    return (
      <>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header headerTitle="Prestação de Contas" />
        <div className="container">
          <Title>
            <h2>Finanças</h2>
            <hr />
          </Title>
          <SubTitle>
            <p>Resumo</p>
            <hr />
          </SubTitle>
          <Row>
            <div className="col-md-4 mb-5 ">
              <iframe
                width="100%"
                height="400px"
                className="text-center"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubhtml?gid=928021458&amp;single=true&amp;widget=true&amp;headers=false"
              ></iframe>
            </div>
            <div className="col-md-8 mb-5 ">
              <iframe
                width="100%"
                height="400px"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubchart?oid=166581470&amp;format=interactive"
              ></iframe>
            </div>
          </Row>
          <SubTitle>
            <p>Detalhes</p>
            <hr />
          </SubTitle>
          <Row>
            <div className="col-md-12 mb-5 ">
              <iframe
                width="100%"
                height="400px"
                className="text-center"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubhtml?gid=688914183&amp;single=true&amp;widget=true&amp;headers=false"
              ></iframe>
            </div>
          </Row>
          <Title>
            <h2>Produção</h2>
            <hr />
          </Title>
          <SubTitle>
            <p>Kits com viseira, elástico e suporte</p>
            <hr />
          </SubTitle>
          <Row>
            <div className="col-md-4 mb-5 ">
              <iframe
                width="100%"
                height="400px"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubhtml?gid=1536242094&amp;single=true&amp;widget=true&amp;headers=false"
              ></iframe>
            </div>
            <div className="col-md-8 mb-5 ">
              <iframe
                width="100%"
                height="400px"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubchart?oid=1354884143&amp;format=interactive"
              ></iframe>
            </div>
          </Row>
        </div>
      </>
    );
  }
}
