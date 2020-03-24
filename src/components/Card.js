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
        <p className="card-text">{props.location}</p>
        <p className="card-text">{props.updatedAt}</p>
        <p className="card-text">{props.status}</p>
      </div>
      <div className="card-footer">
        <div className="text-center">
          <a href={props.url} className="btn btn-primary">
            Ver projeto
          </a>
        </div>        
      </div>
    </div>
  );
}
