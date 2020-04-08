/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";
import Header from "../../components/Header";

/* --------------------------------- EXPORTS ---------------------------------*/
export default class Accoutability extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header headerTitle="Prestação de Contas" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 ">
              <h2 className="text-left">Detalhamento</h2>
              <hr />
              <iframe width="100%" height="500px" className="text-center" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB-JW5B7ElmeIDLHotYZZYQN06OGTbQqqIO3SO_JZGV_8LocHVF_GYt43ZnKGByvbPqBZlJQ8bQyOy/pubhtml?gid=688914183&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
