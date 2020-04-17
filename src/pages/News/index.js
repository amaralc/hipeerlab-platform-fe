import React from "react";
import Header from "../../components/Header";
import NewsCard from "../../components/NewsCard";
import sample_thumb from "./img/sample.png";

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
                    title="Noticia 1"
                    date="DD/MM/2020"
                    description="Texto de exemplo"
                    source="Google"
                    link="https://www.google.com"
                    image={sample_thumb}
                  />
                </div>
                <div className="py-1 mb-1">
                  <NewsCard
                    title="Noticia 2"
                    date="DD/MM/2020"
                    description="Texto de exemplo"
                    source="Google"
                    link="https://www.google.com"
                    image={sample_thumb}
                  />
                </div>
                <div className="py-1 mb-1">
                  <NewsCard
                    title="Noticia 3"
                    date="DD/MM/2020"
                    description="Texto de exemplo"
                    source="Google"
                    link="https://www.google.com"
                    image={sample_thumb}
                  />
                </div>
                <div className="py-1 mb-1">
                  <NewsCard
                    title="Noticia 4"
                    date="DD/MM/2020"
                    description="Texto de exemplo"
                    source="Google"
                    link="https://www.google.com"
                    image={sample_thumb}
                  />
                </div>
                <div className="py-1 mb-1">
                  <NewsCard
                    title="Noticia 5"
                    date="DD/MM/2020"
                    description="Texto de exemplo"
                    source="Google"
                    link="https://www.google.com"
                    image={sample_thumb}
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
