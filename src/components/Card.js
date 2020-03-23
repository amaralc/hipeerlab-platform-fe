import React from "react";

/*
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          esse necessitatibus neque sequi doloribus.
*/

export default function Card(props) {
  return (
    <div className="card h-100">
      <img className="card-img-top" src={props.imgPath} alt="" />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="card-footer">
        <a href={props.url} className="btn btn-primary">
          Site do Projeto
        </a>
      </div>
    </div>
  );
}
