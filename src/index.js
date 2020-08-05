import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

ReactDOM.render(
  <>
    <div className="cards">
      <div className="card">
        <img
          src="https://fanart.tv/detailpreview/fanart/tv/277165/tvposter/silicon-valley-5509b213926fb.jpg"
          alt="picture"
          className="card__img"
        />
        <div className="card__info">
          <span className="card__category">An Original Seiries</span>
          <h3 className="card__title">Silicon Valley</h3>
          <a
            href="https://fanart.tv/series/277165/silicon-valley/"
            target="_blank"
          >
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </>,
  document.getElementById("root")
);
