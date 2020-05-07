/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';
import Header from '../../components/Header';
import Drop from './Drop';

/* --------------------------------- EXPORTS ---------------------------------*/
export default function Accoutability() {
  return (
    <>
      {/* inclui o header nos moldes das paginas de conteudo */}
      <Header headerTitle="Prestação de Contas" />
      <div className="container">
        <Drop />
      </div>
    </>
  );
}
