import './styles.css';
import React from 'react';

export default function NewsCard(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="news-card"
    >
      <img
        className="news-image"
        height="76px"
        width="76px"
        src={props.image}
        alt=""
      />
      <div className="info-container">
        <div className="title">{props.title}</div>
        <div className="date">{props.date}</div>
      </div>
    </a>
  );
}
