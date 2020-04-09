/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";
import Header from "../../components/Header";
import { TeamCard, TeamImg, Div, InImg, Name, About, Title, Description, SubTitle } from "./styles";

/* --------------------------------- EXPORTS ---------------------------------*/
export default class Accoutability extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header headerTitle="Prestação de Contas" />
        <div className="container"> 
          <Title className="py-3 mb-3">
            <h2>Finanças</h2>
            <hr/>
          </Title>        
          <SubTitle className = "py-3 mb-3">
            <p>Resumo</p>
            <hr />
          </SubTitle>                 
          <div className="row">          
            <div className="col-md-4 mb-5 ">             
              <iframe width="100%" height="400px" className="text-center" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubhtml?gid=928021458&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            </div>   
            <div className="col-md-8 mb-5 ">              
              <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubchart?oid=166581470&amp;format=interactive"></iframe>
            </div>          
          </div>
          <SubTitle className = "py-3 mb-3">
            <p>Detalhes</p>
            <hr />
          </SubTitle> 
          <div className="row">
            <div className="col-md-12 mb-5 ">
              <iframe width="100%" height="400px" className="text-center" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubhtml?gid=688914183&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            </div>
          </div>
          <Title className="py-3 mb-3">
            <h2>Produção</h2>
            <hr/>
          </Title> 
          <SubTitle className = "py-3 mb-3">
            <p>Kits com viseira, elástico e suporte</p>
            <hr />
          </SubTitle> 
          <div className="row">
            <div className="col-md-4 mb-5 ">
              <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubhtml?gid=1536242094&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            </div>
            <div className="col-md-8 mb-5 ">
              <iframe width="100%" height="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubchart?oid=1354884143&amp;format=interactive"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
