import "./styles.css";
import React from "react";

export default function NewsCard(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      class="news-card"
    >
      <img
        class="news-image"
        height="76px"
        width="76px"
        src={props.image}
        alt=""
      />
      <div class="info-container">
        <div class="title">{props.title}</div>
        <div class="description">{props.description}</div>
        <div class="provider">
          <div class="source">{props.source} :</div>
          <div class="date">: {props.date}</div>
        </div>
      </div>
    </a>
  );
}
