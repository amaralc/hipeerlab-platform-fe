import React from "react";

export default function Header(props) {
  return (
    <header className="bg-dark py-4 mb-4">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 text-white mt-5 mb-2">
              {props.headerTitle}
            </h1>
            <p className="lead mb-5 text-white">
              Indexação dos projetos de respiradores mecânicos de baixo custo
              para utilização em hospitais no combate ao novo Coronavirus.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
