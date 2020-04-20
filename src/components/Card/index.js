import React from "react";
import { CardContainer } from "./styles";

export default function Card(props) {
  return (
    <CardContainer>
      <img className="card-img-top" src={props.imgPath} alt="" />
      <div className="card-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <p className="card-text text-center">{props.text}</p>
        <p className="card-text text-center">{props.location}</p>
        <p className="card-text text-center">{props.updatedAt}</p>
        <p className="card-text text-center">{props.status}</p>
      </div>
      <div className="card-footer">
        <div className="text-center">
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            {props.button}
          </a>
        </div>
      </div>
    </CardContainer>
  );
}
