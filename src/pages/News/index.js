import React from "react";
import Header from "../../components/Header";

export default class Donate extends React.Component {
  render() {
    return (
      <div>
        <Header headerTitle="Noticias" />
        <div className="container">
          <div className="row">
            <div className="col-md-10 mb-5 ">
              <h5>Titulo de noticia</h5>
              <h7>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h7>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
