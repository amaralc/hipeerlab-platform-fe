import React from "react";
import Header from "../../components/Header";
import NewsCard from "../../components/NewsCard";
import ufsc_masks from "./img/ufsc_masks.png";
import casos_sc from "./img/casos_sc.png";

export default class News extends React.Component {
  render() {
    return (
      <div>
        <Header headerTitle="Noticias" />
        <div className="container py-4">
          <div className="row">
            <div className="container">
              <div>
                <div className="py-1 mb-1">
                  <NewsCard
                    title="UFSC ensina a fazer mascaras faciais"
                    date="16/04/2020"
                    description="[...] especialistas apontam que as máscaras caseiras podem proteger contra infecções respiratórias."
                    source="UFSC"
                    link="https://noticias.ufsc.br/2020/04/faca-a-sua-uso-obrigatorio-de-mascaras-faciais-a-partir-desta-sexta/"
                    image={ufsc_masks}
                  />
                  <NewsCard
                    title="Uso de máscara se torna obrigatório em SC; número de mortes por coronavírus chega a 31"
                    date="17/04/2020"
                    description="Estado tem 962 casos."
                    source="G1"
                    link="https://g1.globo.com/sc/santa-catarina/noticia/2020/04/17/numero-de-mortes-por-coronavirus-em-santa-catarina-chega-a-31.ghtml"
                    image={casos_sc}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
