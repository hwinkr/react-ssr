import React from "react";

import starEmptyImage from "@images/star_empty.png";

import { TMDB_THUMBNAIL_URL } from "../constants/api";

export default function MovieList({ movies }) {
  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className="thumbnail-list">
            {movies.map(({ id, title, poster_path, vote_average }) => {
              const thumbnailUrl = `${TMDB_THUMBNAIL_URL}${poster_path}`;
              const roundedRate = vote_average.toFixed(1);

              return (
                <li key={id}>
                  <a href={`/detail/${id}`}>
                    <div className="item">
                      <img
                        className="thumbnail"
                        src={thumbnailUrl}
                        alt={title}
                      />
                      <div className="item-desc">
                        <p className="rate">
                          <img
                            src={starEmptyImage}
                            className="star"
                            alt="star"
                          />
                          <span>{roundedRate}</span>
                        </p>
                        <strong>{title}</strong>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}