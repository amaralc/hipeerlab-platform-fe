import React from 'react';
import Header from '../../components/Header';
import NewsCard from './NewsCard';
import ufsc_masks from './img/ufsc_masks.png';
import casos_sc from './img/casos_sc.png';

export default function News() {
  return (
    <div>
      <Header headerTitle="Noticias" />
      <div className="container py-4">
        <div className="row">
          <div className="container">
            <div>
              <div className="py-1 mb-1">
                <NewsCard
                  title="Uso de máscara se torna obrigatório em SC."
                  link="https://g1.globo.com/sc/santa-catarina/noticia/2020/04/17/numero-de-mortes-por-coronavirus-em-santa-catarina-chega-a-31.ghtml"
                  image={casos_sc}
                  date="17/04/2020"
                />
                <NewsCard
                  title="UFSC ensina a fazer mascaras faciais."
                  link="https://noticias.ufsc.br/2020/04/faca-a-sua-uso-obrigatorio-de-mascaras-faciais-a-partir-desta-sexta/"
                  image={ufsc_masks}
                  date="16/04/2020"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
