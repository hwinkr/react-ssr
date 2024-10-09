import React from "react";

import logoImage from "@images/logo.png";
import starEmptyImage from "@images/star_empty.png";
import { TMDB_BANNER_URL } from "../constants/api";

export default function Header({ bestMovie }) {
  return (
    <header>
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${TMDB_BANNER_URL}${bestMovie.backdrop_path})`,
        }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src={logoImage} alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src={starEmptyImage} className="star" />
              <span className="rate-value">
                {bestMovie.vote_average.toFixed(1)}
              </span>
            </div>
            <div className="title">{bestMovie.title}</div>
            <button
              className="primary detail"
              onClick={() => alert("Harry Mission Completed")}
            >
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}