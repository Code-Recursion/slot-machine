import React from "react";

function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="picture" className="card__img" />
        <div className="card__info">
          <span className="card__category">An Original Seiries</span>
          <h2 className="card__title">{props.title}</h2>
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
