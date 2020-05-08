/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';
import Header from '../../components/Header';
import Drop from './Drop';

/* --------------------------------- EXPORTS ---------------------------------*/
export default function Faq() {
  return (
    <>
      {/* inclui o header nos moldes das paginas de conteudo */}
      <Header headerTitle="Perguntas Frequentes" />
      <div className="container">
        <Drop />
      </div>
    </>
  );
}
