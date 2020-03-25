import React from "react";

export default function Card(props) {
  return (
    <div className="card h-100">
      <img className="card-img-top" src={props.imgPath} alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <p className="card-text">{props.location}</p>
        <p className="card-text">{props.updatedAt}</p>
        <p className="card-text">{props.status}</p>
      </div>
      <div className="card-footer">
        <div className="text-center">
          <a href={props.url} className="btn btn-dark">
            {props.button}
          </a>
        </div>
      </div>
    </div>
  );
}
